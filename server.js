require('dotenv').config()

// Require modules
const express = require('express')
const methodOverride = require('method-override')
// const cors = require('cors') //here
const db = require('./models/db')
const app = express()

// Configure the app (app.set)
/* Start Config */
app.use(express.urlencoded({ extended: true })) 
// app.use(express.json()) //here
// app.use(cors()) //here
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})
/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public')) // come back to here to pair w public*********

// app.use(
//   session({
//     secret: process.env.SECRET,
//     store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
//     saveUninitialized: true,
//     resave: false,
//   })
// )


app.use('/gym', require('./controllers/routeController'))
app.use('/packages', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
app.get('/', (req, res) => {
  res.render('Home.jsx')
})
/* END Middleware */

// Tell the app to listen on a port
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
