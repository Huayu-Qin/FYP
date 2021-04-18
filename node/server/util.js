const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;
const crypto = require('crypto')

const dateFormat = function(fmt, date){
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // year
        "m+": (date.getMonth() + 1).toString(),     // month
        "d+": date.getDate().toString(),            // day
        "H+": date.getHours().toString(),           // hour
        "M+": date.getMinutes().toString(),         // minute
        "S+": date.getSeconds().toString()          // second
        // must to string
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

// npm install crypto
const md5 = password => {
    if (!password) {
        return ''
    } else {
        return crypto.createHash('md5').update(password + 'kid309xL_%A43cs1').digest("hex")
    }
}

module.exports = {
    propertyIsNotEmpty(obj, property){//property in object
        console.log(obj)
        console.log(property)
        if((property in obj) && obj[property]){
            return true
        }else{
            return false
        }
    },
    toCamel(str){ // convert parent_id to parentId
        return str.replace(/([^_])(?:_+([^_]))/g, function ($0, $1, $2) {
            return $1 + $2.toUpperCase()
        })
    },
    toUnderScoreCase(str){ 
        return str.replace(/([A-Z])/g,"_$1").toLowerCase()
    },
    convertObject(obj){ // change write style，mongo is_
        let type = ''
        for (let key in obj) {
            if(key.includes('_')){
                type = 'under_score_case'
                break
            }

            if(/[A-Z]/.test(key)){
                type = 'camel'
            }
        }

        let finalObj = {}
        for (let key in obj) {
            let finalKey = key
            if(type === 'camel'){ // parentId
                finalKey = this.toUnderScoreCase(key)
            }else if(type === 'under_score_case'){
                finalKey = this.toCamel(key)
            }

            let value = obj[key]  // real value
            // check if convert datetime to string
            if (/.\d{4} \d{2}:\d{2}:\d{2} GMT\+0800 ./.test(value)) {
                finalObj[finalKey] = this.date.utcToDate(value)
            } else {
                finalObj[finalKey] = value
            }
        }

        return finalObj
    },
    isArray(o){
        return Object.prototype.toString.call(o) === '[object Array]'
    },
    date:{
        utcToDate(str){ //2019-11-03T11:41:56.000Z
            let d = new Date(str)
            return dateFormat('YYYY-mm-dd HH:MM:SS',d)
        },
    },
    warn(message){
        return {
            code: 1,
            type: 'warning',
            message: message
        }
    },
    success(data,message = 'Successfully login!'){
        return {
            code: 0,
            type: 'success',
            message,
            data
        }
    },
    objectId(id){
        return new ObjectId(id)
    },
    md5
}
