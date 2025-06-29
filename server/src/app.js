import express from 'express'
import cors from 'cors'
import noteRouter from './routes/note.routes.js'
import userRouter from './routes/user.routes.js'

const app = express()

// Middleware
app.use(
    cors({
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        credentials: true,
    })
)
app.use(express.json())

// Routes
app.use('/api/notes', noteRouter)
app.use('/api/users', userRouter)

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
    })
})

export default app
