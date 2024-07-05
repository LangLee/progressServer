import mongoose from 'mongoose';
var Schema = mongoose.Schema
// 单词
var WordSchema = Schema({
    code: {
        type: String,
        required: true
    },
    english:{
        type: String
    },
    chinese:{
        type: String
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    createBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    // 生词
    newWord: {
        type: Boolean,
        default: false
    },
    // 每日一句
    dailyWord: {
        type: Boolean,
        default: false
    },
})

const Word = mongoose.model('word', WordSchema, "word")

export default Word;
