import React from 'react';
import './Login.css';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

type Token = string;

function Login() {
    const move = useNavigate();
    const location = useLocation();

    const getTokenLocalStorage = (): Token => {
        return localStorage.getItem('token') || '';
    }

    const saveToken = (token: Token) => {
        localStorage.setItem('token', token);
    }
    const onclick = () => {
        window.location.replace('http://localhost:42422/auth');
    }

    const curret = getTokenLocalStorage();
    return (
        <div>
            {
                curret ? (
                move('./home'), null ) : (
                <button className='login' onClick={onclick}>login</button> )
            }
        </div>
    );
};

export default Login;