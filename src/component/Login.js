import React, { useState } from 'react';
import LoginBG from '../img/loginBG.webp';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [text, setText] = useState();
  const navigate = useNavigate();

  const HandleOnclick=()=>{
    let newText = "";
    setText(newText);
    alert("Logged in successfully!");
    navigate('/');
  }

  return (
    <div>
    <div class="card text-bg-dark">
      <img src={LoginBG} class="card-img" alt="..."  style={{height:'635px'}}/>
      <div class="card-img-overlay">
        <h2 class="card-title text-center" style={{marginTop:'80px',color:'black',fontWeight:'bold'}}>Login to Resto.</h2>
        <div style={{height:'400px',width:'600px',marginLeft:'27%',marginTop:'30px'}}>
            <div className="row">
                  <div className="col">
                    <input value={text} type="text" className="form-control" placeholder="First name" aria-label="First name" required/>
                  </div>
                  <div className="col">
                    <input value={text} type="text" className="form-control" placeholder="Last name" aria-label="Last name" required/>
                  </div>
            </div>
            <form style={{color:'white'}}>
              <div className="mb-3">
                <div className="col" style={{paddingTop:'20px'}}>
                    <input value={text} type="email" className="form-control" placeholder="E-mail Address" aria-label="Email" required/>
                </div>
                <div id="emailHelp" className="form-text" style={{color:'white'}}>We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <div className="col">
                  <input value={text} type="password" className="form-control" placeholder="Password" aria-label="password" required/>
                </div>
              </div>
              <div className="mb-3 form-check">
                <input value={text} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <div className='text-center'>
                <button type="submit" className="btn btn-primary" onClick={HandleOnclick}>Sign-in</button>
                {/* <button style={{marginLeft:'20px'}} type='submit' className='btn btn-primary' onClick={handleLoginHistory}> whats Cooking </button> */}
              </div>
            </form>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Login;

