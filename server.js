const express = require('express')
const app = express()
const router = express.Router();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const { PostRouter , MakeRouter } = require('./routes')

app.disable('x-powered-by')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))


app.use('/posts', PostRouter)
app.use('/makes', MakeRouter)
//app.use('/lists', ListRouter)

app.use((err, req, res, next) => {
    res.status(err.status).json({ error: err })
})

app.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not Found.' } })
})

const listener = () => {
    console.log(`listening on port ${port}`)
}

app.listen(port, listener)
