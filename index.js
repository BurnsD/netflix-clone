const PORT = 3000

const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.json('Hello world!')
})

app.listen(3000, () => console.log(`Server is running on port ${PORT}`))