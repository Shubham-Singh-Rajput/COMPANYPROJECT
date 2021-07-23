const fs=require('fs')
const AllUser=require('./../../Model/Schema') 
const uploadJson={
    getUploadJson:async(req,resp)=>{
        try{
           
            let data=fs.readFileSync(req.json,'utf-8')

            data=JSON.parse(data)
            data=Array.from(data)
            if(data.length===0 || Object.keys(data[0]).length>4){
                return resp.json({
                    err:{msg:'please upload the file that conatin array of object in which there is id,body,title field'}
                })
                 
            }
            for(let i=0;i<data.length;i++){
                if(data[i].userId===undefined || data[i].id===undefined || data[i].title===undefined || data[i].body===undefined){
                return resp.json({
                    err:{msg:'please upload the file that conatin array of object in which there is id,body,title field'}
                })
                 
                }
            }   
            let currentuser=await AllUser.findOne({_id:req.userId})
            currentuser.file= []
             await currentuser.save()
                data=data.map((i)=>{
                     currentuser.file.push(i)     
                     
                })
                await currentuser.save()
                    return resp.json({
                        data:['uploaded'],err:{}
                    })
        }
        catch(e){
            // console.log(e.message)
            return resp.json({
                data:[],
                err:{msg:'please upload the file that conatin array of object in which there is id,body,title field'}
            })
        }
    },
    getUploadFile:async(req,resp)=>{
        try{
            let currentUser=await AllUser.findOne({_id:req.userId})
            return resp.json({
                data:currentUser.file,
                err:{}
            })
        }
        catch(e){
            return resp.json({
                data:[],err:{msg:e.message}
            })
        }
    }
}
module.exports=uploadJson