const express = require('express')
const app = express()
const cors = require('cors')

const port = 4000

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(require('./routes/index'))

app.listen(port)
console.log('Servidor en el puerto: ' + port)