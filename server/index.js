require('dotenv').config();
const express= require('express'),
    bodyParser= require('body-parser'),
    massive= require('massive');


const app=express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json())

// massive(CONNECTION_STRING).then((db)=>{
//     app.set('db', db)
// })

massive(CONNECTION_STRING).then(db=>app.set('db', db))


app.listen(SERVER_PORT, ()=>console.log(`Gettin' lit on port ${SERVER_PORT}🔥 🎇`))
