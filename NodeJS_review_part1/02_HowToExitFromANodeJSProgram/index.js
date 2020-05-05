require('dotenv').config();

const express = require('express')
const app = express()

const port = process.env.NODE_ENV
app.get('/', (req, res) => {
    res.send('Hi!')
})

const server = app.listen(port, () => console.log(`Server run port ${port}`))

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    })
})

