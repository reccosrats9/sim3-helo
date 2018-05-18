require('dotenv').config();
const express= require('express'),
    bodyParser= require('body-parser'),
    massive= require('massive'),
    c= require('./controller'),
    session= require('express-session')


const app=express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const port= 3005

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db=>app.set('db', db))
app.use(express.static(__dirname + './../build'))

app.use(session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: true
}))

app.post('/register', c.register)
app.post('/login', c.login)
app.get('/posts/:userid', c.getAll)
app.get('/post/:postid', c.getOne)

app.listen(3005, ()=>console.log(`Gettin' lit on port ${3005}🔥 🎇`))
