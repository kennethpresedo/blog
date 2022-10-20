require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/fruits', require('./controllers/routeController'))

app.listen(3000, () => console.log("Running on port 3000!"))