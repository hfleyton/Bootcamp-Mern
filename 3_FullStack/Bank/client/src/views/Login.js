import React from 'react';
import SI from '../components/SI';
import SU from '../components/SU';


const Login = () => {
    return (
        <div align="center">
            <h1>Dojo Bank</h1>
        <div className="login">
            <SU />
        </div>
        <div className="login">
            <SI />
        </div>
        </div>
    );
}

export default Login;
