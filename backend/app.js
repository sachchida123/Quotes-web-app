const express=require('express')
const app=express();
const port=process.env.PORT ||8080;
const mongoose=require('mongoose')
const seedDB=require('./seed')
const quotRoutes=require('./apis/quoteRoute')
const cors=require('cors')
const db='mongodb+srv://kumarsachchidanand4:dwawKJ9wqlF2TmpP@cluster0.zxgvrf3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 '
mongoose.connect(db,{
    useNewUrlParser:true,
    
    useUnifiedTopology:false,
    
})

//mongoose.connect("mongodb://127.0.0.1:27017/Quote")

.then(()=>{
    console.log('Db connected')
})
.catch((err)=>{
    console.log(err)
})
app.get("/hello",(req,res)=>{
    res.status(200).json({msg:"hello from quoteApp"})
})
app.use(express.urlencoded({extended:true})) 
app.use(express.json());
app.use(cors({origin:['http://localhost:3000']}))
app.use(quotRoutes)

//seedDB();

app.listen(port,()=>{
    console.log(`server connected at port ${port}`)
})