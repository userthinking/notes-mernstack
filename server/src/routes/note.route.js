import express from 'express'

import {
    getAllNotes,
    getNoteByID,
    postNoteData,
} from '../controllers/note.controller.js'

const noteRouter = express.Router()

noteRouter.get('/notes', getAllNotes)
noteRouter.post('/addNote', postNoteData)

noteRouter.get('/notes/:id', getNoteByID)

export default noteRouter
