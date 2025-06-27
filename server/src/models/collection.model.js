import mongoose from 'mongoose'

const collectionSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },

        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Collection',
            default: null,
        },

        notes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Note',
            },
        ],

        subCollections: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Collection',
            },
        ],

        // userId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true,
        // },
    },
    { timestamps: true }
)

const Collection = mongoose.model('Collection', collectionSchema)

export default Collection
