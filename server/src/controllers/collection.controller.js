import Collection from '../models/collection.model.js'
import sendError from '../utils/sendError.util.js'

const getAllCollections = async (req, res) => {
    try {
        const collections = await Collection.find({})

        res.status(200).json({ success: true, collections })
    } catch (error) {
        console.error('Error fetching collections', error)

        return sendError(res, 500, error.message)
    }
}

const getCollectionByID = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) return sendError(res, 404, 'Collection not found')

        const collection = await Collection.findById(id)
        res.status(200).json({ success: true, collection })
    } catch (error) {
        console.error('Error fetching Collection by ID', error)

        return sendError(res, 500, error.message)
    }
}

const postCollectionData = async (req, res) => {
    try {
        const { title } = req.body

        if (!title) return sendError(res, 404, 'Title is Required')

        await Collection.create({ title })
        res.status(201).json({ success: true, title })
    } catch (error) {
        console.error('Error posting data', error)

        return sendError(res, 500, error.message)
    }
}
export { getAllCollections, postCollectionData, getCollectionByID }
