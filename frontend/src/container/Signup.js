import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Token from './../Redux/Action/index';
const SignUp = ({history}) => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [err,setError]=useState({msg:''})
    const dispatch=useDispatch()
    const GETTOKEN=useSelector((Token)=>Token)
    const SUBMIT=(e)=>{
        e.preventDefault()
        fetch('http://localhost:2000/signup',{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(d=>d.json()).then(d=>{
            if(Object.keys(d.err).length>0){
                setError({...d.err})
            }
            else{
                dispatch(Token.addToken(d.data[0]))
                history.push('/upload')
            }
        }).catch(e=>{
            dispatch(Token.removeToken())
        })
    }
    return(
  <>
    <div className="container"style={{position:'fixed', top:'50%',left:'50%',transform:'translate(-50%, -50%)',width:'60vw'}} >
        {GETTOKEN.length===0?
      <form onSubmit={SUBMIT}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            required
            onChange={((e)=>{setName(e.target.value)
                setError({msg:''})})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={((e)=>{setEmail(e.target.value)
                setError({msg:''})
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            minLength="3"
            required
            onChange={((e)=>{
                setPassword(e.target.value)
                setError({msg:''})
            })}
          />
        </div >
        <div className="mb-3" style={{color:'red' , textAlign:'center'}}>
            {err.msg} 
        </div >
        <div style={{ display:'flex',justifyContent:'center'}}>
        <button  type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>:<h1 style={{textAlign:'center'}}>YOU HAVE ALREDY LOGIN</h1>}</div>
  </>
)
};
export default SignUp