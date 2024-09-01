import mongoose from 'mongoose';
var Schema = mongoose.Schema
// 提示词
var PromptSchema = Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    createBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Prompt = mongoose.model('prompt', PromptSchema, "prompt")

export default Prompt;
