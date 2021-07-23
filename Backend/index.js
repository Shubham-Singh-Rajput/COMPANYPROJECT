const connection =require('./File/Model/connect')
connection()
const PORT=2000
const express=require('express')
const Routes=require("./File/Contoller/Routes")
const fileUpload=require("express-fileupload")
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({
    useTempFiles:true,
}))

app.use(Routes)
app.use((req,resp,next)=>{
    const err=new Error ("page Not Found")
    next(err)

})

// checking the app error
app.use((err,req,resp,next)=>{
    return resp.status(400).json({
        data:[],
        err:{msg:err.message}
    })
})
app.listen(PORT,()=>{
    console.log('listen at port',PORT)
})