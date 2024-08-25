import mongoose from 'mongoose';
var Schema = mongoose.Schema

// 用户
var userSchema = Schema({
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validators: [
            {
                validator: function(value) {
                    return value.length >= 6
                },
                msg: '密码长度必须大于6位',
            }]
    },
    mobile: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    wx_openid: {
        type: String,
        unique: true
    },
    administrator: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: ''
    }
})


const User = mongoose.model('user', userSchema, "user")

export default User
