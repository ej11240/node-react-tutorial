const express=require('express')
const app=express()
const port=5000

const mongoose =require('mongoose')
mongoose.connect(' mongodb+srv://ej11240:<happy0304>@boilerplate.jhjtj.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('몽고디비 연결됨....'))
.catch('mongoodb error')

app.get('/',(req,res)=> res.send('Hello world!'))
app.listen(port,()=> console.log(`Example app listening on port ${port}`)) 