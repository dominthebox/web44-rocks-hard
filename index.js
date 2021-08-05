require('dotenv').config() // this allows us to "inject" fake environment variables

const { PORT } = require('./config')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json()) // teaches express to parse req.body
server.use(cors()) // enables CORS to get around browser's "same origin" policy
server.use(helmet()) // security 

server.get('/', (req, res) => {
    res.send(`
        <h1>Web 44 Is Awesome!</h1>
    `)
})

server.use('*', (req, res) => {
    res.json({
        message: 'web 44 is awesome indeed'
    })
})

server.listen(PORT, () => { // heroku machine uses a different port, it uses process.env.PORT
    console.log(`listening on ${PORT}`)
})