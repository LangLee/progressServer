import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "新建分组"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String
    },
    icon: {
        type: String
    },
    createTime: {
        type: Date,
        default: Date.now
    }
})
const Group = mongoose.model('group', GroupSchema, 'group')
export default Group