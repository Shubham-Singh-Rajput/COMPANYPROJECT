import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {Redirect} from 'react-router-dom'
const AllData=()=>{
    const GETTOKEN=useSelector((Token)=>Token)
    const [data,setData]=useState([])
    useEffect(()=>{
        if(GETTOKEN.length>0){
            fetch('http://localhost:2000/upload',{
                headers:{
                    token:GETTOKEN
                }
            }).then(d=>d.json()).then(d=>{
                setData(d.data)
            })
        }
    },[GETTOKEN])
    return(
        <>
        {GETTOKEN.length===0?<Redirect to ='/'></Redirect>:
        data.length===0?<h1 style={{position:'fixed', top:'50%',left:'50%',transform:'translate(-50%, -50%)',width:'60vw',textAlign:'center'}}>PLEASE UPLOAD JSON FILE TO VIEW DATA</h1>:<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            {data.map((i,key)=>(
                <div key={key} className="card m-3" style={{width: '18rem',border:'1px solid black'}}>
                <div className="card-body">
                <h5 className="card-title" style={{textAlign:'center'}}>TITLE</h5>
                
                  <h5 className="card-title" style={{textAlign:'center'}}>{i.title}</h5>
                  <hr></hr>
                  <h5 className="card-title" style={{textAlign:'center'}}>ID</h5>
                  <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:'center'}}> {i.id}</h6>
                  <hr></hr>
                  <h5 className="card-title" style={{textAlign:'center'}}>USERID</h5>
                  <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:'center'}}>{i.userId}</h6>
                  <hr></hr>
                  <h5 className="card-title" style={{textAlign:'center'}}>BODY</h5>
                  <p className="card-text" style={{textAlign:'center'}}>{i.body}</p>
                </div>
              </div>
            ))}
        </div>}
        </>
    )
}
export default AllData