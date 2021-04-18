const mongoose = require('../db')
const Schema = mongoose.Schema

//  uder module
const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // set(val){
  //   return require('bcryptjs').hashSync(val,4)
  // } },
  nickname: { type: String },
  type: { type: String, required: true },
})


module.exports = mongoose.model('SysUser', schema, 'sys_user')
