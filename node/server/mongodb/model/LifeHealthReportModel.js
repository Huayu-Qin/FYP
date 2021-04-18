const mongoose = require('../db')
const Schema = mongoose.Schema

//  user module
const schema2 = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number },
    sex: { type: String },
    bed_time: { type: Number },
    sleep_time: { type: Number },
    total_sleep_score: { type: Number },

    screen_time: { type: Number },
    sport_time: { type: Number },
    total_sport_score: { type: Number },

    breakfast: { type: String },
    lunch: { type: String },
    dinner: { type: String },
    total_meal_score: { type: Number },

    meal: { type: String },

    meal_score: { type: Number },


    create_time: { type: Date, default: Date.now },
})

module.exports = mongoose.model('LifeHealthReport', schema2, 'tb_lifeHealth_report')