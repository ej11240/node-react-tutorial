const express=require('express')
const app=express()
const port=5000

const {User}=require("./models/User");
const bodyParser=require('body-parser');
//body-parser가 클라이언트에서 오는 정보를 서버에서 분석해서 받을 수 있도록 한다. 이때 다음과 같이 분석하여 가져올 수 있도록 한다.
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true})); 
//application/json
app.use(bodyParser.json());

const mongoose =require('mongoose')
const config=require('./config/key');
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('몽고디비 연결됨....'))
.catch('mongoodb error')

app.get('/',(req,res)=> res.send('Hello world!!!'))

app.post('/register', (req,res)=>{
    //회원가입시 필요한 정보들을 클라이언트에서 가져오면 
    //그것들을 데이터 베이스에 넣어준다.

    //body-parser가 가져온 정보들을 데이터베이스에 넣는다. 데이터 형식은 req.body에 있는 형식대로 넣어진다.
    const user =new User(req.body)
    user.save((err, userInfo)=>{ 
        if(err) return res.json({success:false, err}) //에러 발생시
        return res.status(200).json({ //성공시
            success:true
        })
    })
})
//post 메소드를 이용한다. 엔드 포인트는 router이다.
app.listen(port,()=> console.log(`Example app listening on port ${port}`)) 