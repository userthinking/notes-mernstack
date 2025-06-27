import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Collection',
            default: null,
        },
    },
    { timestamps: true }
)

const Note = mongoose.model('Note', noteSchema)

export default Note
