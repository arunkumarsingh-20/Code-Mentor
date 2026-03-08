const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

// Update the CORS configuration to only allow your specific frontends
app.use(cors({
    origin: [
        'http://localhost:5173', // Allows your local Vite frontend
        process.env.FRONTEND_URL // We will set this in Render to your Vercel URL later
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app