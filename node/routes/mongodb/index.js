const express = require('express')
const router = express.Router()
const util = require('../../server/util')
//const Order = require('../../server/mongodb/model/OrderModel')
const SysUser = require('../../server/mongodb/model/SysUserModel')
const HealthReportModel = require('../../server/mongodb/model/HealthReportModel')
const LifeHealthReportModel = require('../../server/mongodb/model/LifeHealthReportModel')

/**
 * query param: req.query
 * form param :req.body
 * path param: req.params
 * header: req.get('Content-Type')
 */
const SECRET = 'Jwt-token'

router.post('/sys/user', async (req, res, next) => {
  const param = req.body
  param.password = util.md5(param.password)
  let result
  // update information
  if (param._id) {
    const _id = param._id
    delete param._id
    result = await SysUser.findOneAndUpdate({ _id: _id }, param)
  } else {
    result = await new SysUser(param).save()
  }
  res.send(util.success(result.data))
})
router.get('/sys/user/list', async (req, res, next) => {
  let param = {}
  if (req.query.nickname) {
    param = { nickname: req.query.nickname }
  }
  const list = await SysUser.find(param)
  res.send(util.success(list))
})

// disease analysis
router.post('/health/report', async (req, res, next) => {
  const param = util.convertObject(req.body)

  const calcAgeScore = age => {
    let score = 0
    if (age >= 20 && age <= 34) {
      score = -9
    } else if (age >= 35 && age <= 39) {
      score = -4
    } else if (age >= 40 && age <= 44) {
      score = 0
    } else if (age >= 45 && age <= 49) {
      score = 3
    } else if (age >= 50 && age <= 54) {
      score = 6
    } else if (age >= 55 && age <= 59) {
      score = 8
    } else if (age >= 60 && age <= 64) {
      score = 10
    } else if (age >= 65 && age <= 69) {
      score = 11
    } else if (age >= 70 && age <= 74) {
      score = 12
    } else if (age >= 75 && age <= 79) {
      score = 13
    }
    return score
  }
  const calcCholesterolScore = (cholesterol, age) => {
    let score = 0
    if (cholesterol < 160) {
      score = 0
    } else if (cholesterol >= 160 && cholesterol <= 199) {
      if (age >= 20 && age <= 39) {
        score = 4
      } else if (age >= 40 && age <= 49) {
        score = 3
      } else if (age >= 50 && age <= 59) {
        score = 2
      } else if (age >= 60 && age <= 69) {
        score = 1
      } else if (age >= 70 && age <= 79) {
        score = 0
      }
    } else if (cholesterol >= 200 && cholesterol <= 239) {
      if (age >= 20 && age <= 39) {
        score = 7
      } else if (age >= 40 && age <= 49) {
        score = 5
      } else if (age >= 50 && age <= 59) {
        score = 3
      } else if (age >= 60 && age <= 69) {
        score = 1
      } else if (age >= 70 && age <= 79) {
        score = 0
      }
    } else if (cholesterol >= 240 && cholesterol <= 279) {
      if (age >= 20 && age <= 39) {
        score = 9
      } else if (age >= 40 && age <= 49) {
        score = 6
      } else if (age >= 50 && age <= 59) {
        score = 4
      } else if (age >= 60 && age <= 69) {
        score = 2
      } else if (age >= 70 && age <= 79) {
        score = 1
      }
    } else if (cholesterol >= 280) {
      if (age >= 20 && age <= 39) {
        score = 11
      } else if (age >= 40 && age <= 49) {
        score = 8
      } else if (age >= 50 && age <= 59) {
        score = 5
      } else if (age >= 60 && age <= 69) {
        score = 3
      } else if (age >= 70 && age <= 79) {
        score = 1
      }
    }

    return score
  }
  const calcHDLCScore = hdlc => {
    let score = 0
    if (hdlc >= 60) {
      score = -1
    } else if (hdlc >= 50 && hdlc <= 59) {
      score = 0
    } else if (hdlc >= 40 && hdlc <= 49) {
      score = 1
    } else if (hdlc < 40) {
      score = 2
    }
    return score
  }
  const calcSBPScore = sbp => {
    let score = 0
    if (sbp < 120) {
      score = 0
    } else if (sbp >= 120 && sbp <= 129) {
      score = 1
    } else if (sbp >= 130 && sbp <= 139) {
      score = 2
    } else if (sbp >= 140 && sbp <= 149) {
      score = 2
    } else if (sbp >= 160) {
      score = 3
    }
    return score
  }
  const calcSmokeScore = (smoke, age) => {
    let score = 0
    if (age >= 20 && age <= 39) {
      score = smoke == 'Y' ? 8 : 0
    } else if (age >= 40 && age <= 49) {
      score = smoke == 'Y' ? 5 : 0
    } else if (age >= 50 && age <= 59) {
      score = smoke == 'Y' ? 3 : 0
    } else if (age >= 60 && age <= 69) {
      score = smoke == 'Y' ? 1 : 0
    } else if (age >= 70 && age <= 79) {
      score = smoke == 'Y' ? 1 : 0
    }

    return score
  }


  // sbp-Systolic blood pressure cholesterol
  const { age, cholesterol, hdlc, smoke, sbp } = param

  let totalScore = calcAgeScore(age)
    + calcCholesterolScore(cholesterol, age)
    + calcHDLCScore(hdlc)
    + calcSBPScore(sbp)
    + calcSmokeScore(smoke, age)

  // coronary disease total score
  param.heart_disease_score = totalScore
  if (totalScore < 0) {
    param.heart_disease_probability = '<1%'
  } else if (totalScore >= 17) {
    param.heart_disease_probability = '>=30%'
  } else {
    const p = ['1%', '1%', '1%', '1%', '1%', '2%', '2%', '3%', '4%', '5%', '6%', '8%', '10%', '12%', '16%', '20%', '25%']
    param.heart_disease_probability = p[totalScore]
  }
  //bmi = height/weight^2
  let height = param.stature / 100
  param.bmi = (param.weight / (height * height)).toFixed(2)

  const result = await HealthReportModel(param).save()
  res.send(util.success(result))
})

router.get('/health/report', async (req, res, next) => {

  console.log()
  let param = { username: req.query.username }
  if (req.query._id) {
    param["_id"] = util.objectId(req.query._id)
  }
  if (req.query.createTimeArray && req.query.createTimeArray.length == 2) {
    let start = req.query.createTimeArray[0]
    let end = req.query.createTimeArray[1]
    start = start.substring(1, 11) + " " + start.substring(12, 20)
    end = end.substring(1, 11) + " " + end.substring(12, 20)
    param.create_time = {
      $gte: new Date(start),
      $lt: new Date(end)
    }
  }
  // const list = await TbHealthReportModel.find(param)
  const list = await HealthReportModel.find(param).sort({ create_time: 1 })
  res.send(util.success(list))
})


// LifeHealth Calculate
router.post('/lifeHealth/report', async (req, res, next) => {
  const param = util.convertObject(req.body)

  const calcBedScore = bed_time => {
    let score = 0
    if (bed_time >= 19 && bed_time <= 24) {
      score = 3
    } else if (bed_time >= 0 && bed_time < 3) {
      score = 1
    } else if (bed_time >= 3 && bed_time < 19) {
      score = -1
    }
    return score
  }

  const calcSleepScore = sleep_time => {
    let score = 0
    if (sleep_time >= 8) {
      score = 3
    } else if (sleep_time >= 6 && sleep_time < 8) {
      score = 1
    } else if (sleep_time < 6) {
      score = -1
    }
    return score
  }
  const calcScreenScore = screen_time => {
    let score = 0
    if (screen_time >= 0 && screen_time < 4) {
      score = 3
    } else if (screen_time >= 4 && screen_time < 8) {
      score = 1
    } else if (screen_time >= 8) {
      score = -1
    }
    return score
  }

  const calcSportScore = sport_time => {
    let score = 0
    if (sport_time >= 1) {
      score = 3
    } else if (sport_time > 0 && sport_time < 1) {
      score = 1
    } else if (sport_time = 0) {
      score = -1
    }
    return score
  }
  const calcBreakfastScore = breakfast => {
    let score = 0
    if (breakfast == "U") {
      score = 3
    } else if (breakfast == "S") {
      score = 1
    } else if (breakfast == "N") {
      score = -1
    }
    return score
  }
  const calcLunchScore = lunch => {
    let score = 0
    if (lunch == "U") {
      score = 3
    } else if (lunch == "S") {
      score = 1
    } else if (lunch == "N") {
      score = -1
    }
    return score
  }
  const calcDinnerScore = dinner => {
    let score = 0
    if (dinner == "U") {
      score = 3
    } else if (dinner == "S") {
      score = 1
    } else if (dinner == "N") {
      score = -1
    }
    return score
  }
  const calcMealScore = meal => {
    let score = 0
    if (meal == "B") {
      score = 3
    } else if (meal == "V") {
      score = 1
    } else if (meal == "M") {
      score = -1
    }
    return score
  }

  const { sleep_time, bed_time, screen_time, sport_time, breakfast, lunch, dinner, meal } = param

  let totalSleepScore = calcBedScore(bed_time)
    + calcSleepScore(sleep_time)

  let totalSportScore = calcScreenScore(screen_time)
    + calcSportScore(sport_time)

  let totalMealScore = calcBreakfastScore(breakfast)
    + calcLunchScore(lunch)
    + calcDinnerScore(dinner)
  let totalMealSpeciesScore = calcMealScore(meal)
  //Sleep Score
  param.total_sleep_score = totalSleepScore

  // Sport Score
  param.total_sport_score = totalSportScore
  // Meal Score
  param.total_meal_score = totalMealScore
  // Meal species Score
  param.meal_score = totalMealSpeciesScore

  const result = await LifeHealthReportModel(param).save()
  res.send(util.success(result))

});

router.get('/lifeHealth/report', async (req, res, next) => {

  console.log()
  let param = { username: req.query.username }
  if (req.query._id) {
    param["_id"] = util.objectId(req.query._id)
  }
  if (req.query.createTimeArray && req.query.createTimeArray.length == 2) {
    let start = req.query.createTimeArray[0]
    let end = req.query.createTimeArray[1]
    start = start.substring(1, 11) + " " + start.substring(12, 20)
    end = end.substring(1, 11) + " " + end.substring(12, 20)
    param.create_time = {
      $gte: new Date(start),
      $lt: new Date(end)
    }
  }

  const list = await LifeHealthReportModel.find(param).sort({ create_time: 1 })
  res.send(util.success(list))
})


router.post('/login', async (req, res, next) => {
  let user = req.body
  if (!user.id) user.password = util.md5(user.password)
  const q = {
    username: user.username,
    password: user.password
  }

  const list = await SysUser.find(q)

  if (list && list.length == 0) {
    res.send(util.warn("Username or Password are not correct!"))
  } else {
    // console.log(list[0]._id)
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({
      id: String(user._id),
    }, SECRET)
    res.send(util.success({
      token: {
        // token: list[0]._id, 
        token: token,//JWT=token
        timeout: 30
      },
      user: list[0]
    }, "Successfully login!"))
  }
});
router.delete('/sys/user', async (req, res) => {
  const result = await SysUser.deleteOne({ _id: req.body.id })
  res.send(util.success(result.data))
})
module.exports = router
