import React from 'react';
import { Redirect } from 'react-router-dom';
// import {Redirect} from 'react-router-dom';

export default function Signin({username,password,isLoggedIn,handleChange,handleSignin}){
    if(isLoggedIn){
        return <Redirect to='/' />
    }
    return(
        <div>
            username<input 
                type='text'
                name='username'
                placeholder='Enter the Username'
                value={username}
                onChange={handleChange}
            /><br /><br />
            password<input 
                type="password"
                name="password"
                placeholder="Enter the Password"
                value={password}
                onChange={handleChange}
            /><br /><br />
            <button onClick={handleSignin}>isLoggedIn</button>
        </div>
    );
}