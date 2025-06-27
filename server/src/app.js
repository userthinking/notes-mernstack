import express from 'express'
import collectionRouter from './routes/collection.route.js'
import noteRouter from './routes/note.route.js'

const app = express()

app.use(express.json())

app.use('/api/collections', collectionRouter)
app.use('/api/collections', noteRouter)

export default app
