

const express = require('express')
const app = express()
const data = require('./data/categories.json')

const cors = require('cors')

const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('this is main section ')
})

app.get('/categories', (req, res) => {
    res.send(data)
})


app.listen(port, () => {
    console.log(`this is port number ${port}`)
})






