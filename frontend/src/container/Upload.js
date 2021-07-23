
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
const Upload=({history})=>{
  const GETTOKEN=useSelector((Token)=>Token) 
  const [file,setFile]=useState({})  
  const [err,setErr]=useState({})
  const UPLOADFILE=(e)=>{
      setErr({msg:''})
      setFile(e.target.files[0])
  }
  const UploadToDb=(e)=>{
    e.preventDefault()
    if(file.name!==undefined){
    var data = new FormData()
    data.append('json',file)
    // console.log((file))
    
    fetch('http://localhost:2000/upload',{
        method:'POST',
        headers:{
          token:GETTOKEN
        },
        body:data
      }).then(d=>d.json()).then(d=>{
          if(Object.keys(d.err).length>0){
            setErr({...d.err})
          }
          else{
                history.push('/showdata')
          }
      }).catch(e=>{
        history.push('/')
          // console.log(e.message)
      })
    }
  }
  return (
      <>
      {
          GETTOKEN.length===0?<Redirect to ='/'></Redirect>:
          <>
             <div style={{position:'fixed', top:'50%',left:'50%',transform:'translate(-50%, -50%)',width:'60vw'}}>
            <div style={{textAlign:'center'}}><label htmlFor="formFileLg" className="form-label">UPLOAD FILE</label></div>
            <input className="form-control form-control-lg" id="formFileLg" type="file" name='json' onChange={UPLOADFILE}/>
            <div style={{ display:'flex',justifyContent:'center'}}>
                <button  type="submit" className="btn btn-primary" onClick={UploadToDb} style={{margin:'2%'}}>
                Submit
                </button>
                </div>
            <div style={{textAlign:'center' , color:'red'}}>{err.msg}</div>
            </div>
          </>
      }
      </>
  )
}
export default Upload