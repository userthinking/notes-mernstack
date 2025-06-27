import Note from '../models/note.model.js'
import sendError from '../utils/sendError.util.js'

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({})

        res.status(200).json({ success: true, notes })
    } catch (error) {
        console.error('Error fetching Notes', error)

        return sendError(res, 500, error.message)
    }
}

const getNoteByID = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) return sendError(res, 404, 'Note not found')

        const note = await Note.findById(id)
        res.status(200).json({ success: true, note })
    } catch (error) {
        console.error('Error fetching Note by ID', error)

        return sendError(res, 500, error.message)
    }
}

const postNoteData = async (req, res) => {
    try {
        const { title, body } = req.body

        if (!title || !body)
            return sendError(res, 404, 'Title and Body Required')

        await Note.create({ title, body })
        res.status(201).json({ success: true, title, body })
    } catch (error) {
        console.error('Error posting note', error)

        return sendError(res, 500, error.message)
    }
}

export { getAllNotes, postNoteData, getNoteByID }
