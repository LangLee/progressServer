import mongoose from 'mongoose';
var Schema = mongoose.Schema
// 箴言，格言
var NoteSchema = Schema({
    word: {
        type: String,
        required: true
    },
    from:{
        type: String
    },
    image:{
        type: String
    },
    photoBy: {
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
    // 每日一句
    daily: {
        type: Boolean,
        default: false
    },
})

const Note = mongoose.model('note', NoteSchema, "note")

export default Note;
