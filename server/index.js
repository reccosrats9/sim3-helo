require('dotenv').config();
const express= require('express'),
    bodyParser= require('body-parser'),
    massive= require('massive');
    c= require('./controller')


const app=express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const port= 3005

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db=>app.set('db', db))

app.post('/register', c.register)
app.post('/login', c.login)


app.listen(3005, ()=>console.log(`Gettin' lit on port ${3005}🔥 🎇`))
