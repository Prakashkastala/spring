import { useState } from 'react'
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';
function AddUser() {
    let[user,setUser]=useState({
        name:"",email:"",username:""
    })
    let navigate=useNavigate();
    const{name,email,username}=user;
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
const onsubmit=async(e)=>{    
    e.preventDefault();
    await axios.post("http://localhost:8080/users",user);
    navigate("/");
}
  return (
 <>
<div className='container'>
<div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Register User</h2>
        <form onSubmit={(e)=>onsubmit(e)}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type="text" className='form-control' placeholder='Enter your name'
                    value={name} onChange={(e)=>onInputChange(e)} name='name'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type="email" className='form-control' placeholder='Enter your email'
                    value={email} onChange={(e)=>onInputChange(e)} name='email'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input type="text" className='form-control' placeholder='Enter your username'
                    value={username} onChange={(e)=>onInputChange(e)} name='username'/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>    
                <button type='reset' className='btn btn-outline-danger' onClick={() => setUser({name:"",email:"",username:""})}>Cancel</button>     
        </form>
        </div>
    </div>    
</div>
 
 </>
  )
}
export default AddUser;