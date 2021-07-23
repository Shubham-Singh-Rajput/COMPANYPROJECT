const jwt=require('jsonwebtoken')
const Auth=async(req,resp,next)=>{
        try{
            if(!req.headers.token){
                return resp.status(200).json({
                    data:[],
                    err:{msg:"please login"}
                })
            }
            const userId=await jwt.verify(req.headers.token,'user')
            req.userId=userId.id
            next()
        }
        catch(e){
            return resp.json({
                data:[],
                err:{msg:"please login"}
            })
        }
}

module.exports=Auth