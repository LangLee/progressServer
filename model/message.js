import mongoose from 'mongoose';
import { MESSAGE_STATUS } from '../common/constants';
const Schema = mongoose.Schema

// 发送消息
const MessageSchema = Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: MESSAGE_STATUS
    }
})

const Message = mongoose.model('message', MessageSchema, 'message')

export default Message;
