const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi, I\'m here'))

app.listen(port, _ => console.log(`App running on ${port}!`))
