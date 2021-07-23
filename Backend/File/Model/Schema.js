const mongoose=require('mongoose')

const SubJson=mongoose.Schema({
    userId:String,
    title:String,
    id:String ,
    body:String
})
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'enter the name']
    },
    email:{
        type:String,
        required:[true,'enter the email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email Id']
    },
    password:{
        type:String,
        minlength: [3,"enter minimum length of three"],
        trim:true
    },
    file:[SubJson]
})

module.exports= mongoose.model('upload',userSchema)