const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./config/db')

const userRouter = require('./routes/userRoutes')
const doctorRouter = require('./routes/doctorRoutes')

const PORT = process.env.PORT || 5000

const app = express()

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/user',userRouter)
app.use('/api/v1/doctor',doctorRouter)

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`.yellow.bold)
        })
    } catch (error) {
        console.error(error)
    }
}

start()