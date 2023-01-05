
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const router = require('./Router');

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.listen(3001,()=>{
    console.log('on port 3001');
})
const uri = 'mongodb+srv://liul:eKwJXBaSPD6sHSCX@cluster0.up98o7c.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri,()=>{
    console.log('connected to atlas db');
})

app.use(router)