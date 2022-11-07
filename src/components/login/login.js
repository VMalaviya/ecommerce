import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './login.css';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const login = () => {
        const {email, password} = user
        if(email && password){
            axios.post("http://localhost:9002/login", user)
            .then(res => console.log(res.data.message));
        } else {
            console.log("Please enter valid input.");
        }
    }

    let navigate = useNavigate();
    
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={ handleChange }></input>
                <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={ handleChange }></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={() => navigate('/register')}>Register</div>
            </div>
        </>
    );
}

export default Login;