const User=require('./../../Model/Schema')
const jwt=require("jsonwebtoken")
const mongoose=require('mongoose')
const signUp={
    postSignUp:async(req,resp)=>{
        try{
        let PresentUser=await User.findOne({email:req.body.email})
        if(PresentUser){
            return resp.status(200).json({
                data:[],
                err:{msg:"Email is alredy Present"}
            })
        }
        let newUser=new User({
            ...req.body
        })
        await newUser.save()
        let token=await jwt.sign({id:newUser._id},'user')
        return resp.status(200).json({
            data:[token],
            err:{}
        })
    }
    catch(e){
        if(e){
            if(e instanceof mongoose.Error.ValidationError){
                let fields={}
                for(let field in e.errors ){
                    fields[field]=e.errors[field].message
                }
                return resp.json({
                    data:[],
                    err:fields
                })
            }
            else{
                return resp.json({
                    data:[],
                    err:{msg:e.message}
                })
            }
        }
    }
}

}
module.exports=signUp