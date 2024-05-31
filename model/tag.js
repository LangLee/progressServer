import mongoose from 'mongoose';
var Schema = mongoose.Schema
// 标签
var TagSchema = Schema({
    title:{
        type: String,
        required: true,
        default: '新建标签'
    },
    color: String,
    createTime: {
        type: Date,
        default: Date.now
    }
})

const Tag = mongoose.model('tag', TagSchema, "tag")

export default Tag;
