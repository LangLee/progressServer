import mongoose from 'mongoose';
var Schema = mongoose.Schema

// 附件
var attachmentSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: Buffer,
        required: true
    }
})


const Attachment = mongoose.model('attachment', attachmentSchema, "attachment")

export default Attachment;
