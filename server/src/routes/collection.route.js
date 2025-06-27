import express from 'express'
import {
    getAllCollections,
    postCollectionData,
    getCollectionByID,
} from '../controllers/collection.controller.js'

const collectionRouter = express.Router()

collectionRouter.get('/', getAllCollections)
collectionRouter.post('/addCollection', postCollectionData)

collectionRouter.get('/:id', getCollectionByID)

export default collectionRouter
