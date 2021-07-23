const Route=require('express').Router()
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "do5myffsz",
  api_key: "867162412586856",
  api_secret: "YaL6VCn5vfpGbZbPoDhzFtLjq00",
});
const Auth= require('./../Auth')
const upload = async (req, resp, next) => {
    if(req.files){
        // console.log(req.files)
      if (req.files.json.mimetype == "application/json") {
        req.json = req.files.json.tempFilePath;
        
        return next();
      } else {
        let err = new Error("please upload the json file in format");
        return next(err);
      }
      }
      else{
          return resp.json({
              data:[],
              err:{msg:"please upload the json file in format"}
          })
      }
  };
const Signup=require('./../SingleController/Signup')
const Login=require('./../SingleController/Login')
const UploadJson=require('./../SingleController/uploadJson')
Route.post('/signup',Signup.postSignUp)
Route.post('/login',Login.postUserLogin)
Route.post('/upload',Auth,upload,UploadJson.getUploadJson)
Route.get('/upload',Auth,UploadJson.getUploadFile)
module.exports=Route