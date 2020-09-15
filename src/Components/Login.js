import React from 'react';
import '../Assets/Login.css';
import {loginUrl} from '../utils/spotify'
function Login() {
    return (
        <div className="login">
            <img src="/spotify-logo.jpg" alt=""/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
