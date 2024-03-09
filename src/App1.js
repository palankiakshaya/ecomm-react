import React from 'react'
import {useState} from 'react'

export default function App1() {
  const [access, Access] = useState({ access: "", className: "" });

    const f1 = () => {
        let uname = document.getElementById('s1').value.trim();
        let pass = document.getElementById('s2').value.trim();
              console.log(uname)
              console.log(pass)
        if (uname === 'john' && pass === 'pass1234') {
            Access({ access: 'Access granted', className: 'success' });
        } else {
            Access({ access: 'Access Denied', className: 'fail' });
        }
    };
  return (
    <div>
        <h2>Login Form</h2>
        <p>
            <input id='s1' type='text' placeholder='Enter username' />   
        </p>
        <p>
           <input id='s2' type='password' placeholder='password' /> 
        </p>
            <button onClick={f1}>Login</button>
            <div className={access.className}>{access.access}</div>
    
    </div>

  )
}


