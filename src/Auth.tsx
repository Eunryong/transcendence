import axios from "axios";
import React, { useState } from "react";
import "./Auth.css";
import Layout from "./Layout/Layout";

const Auth: React.FC = () => {
    //auth
    const [pass, setPass] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pass.length !== 6) {
            alert("6자리 숫자를 입력하세요");
            return ;
        }
        console.log(pass);
        axios.post("./back", pass);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const numericValue = value.replace(/\D/g, '');
        setPass(numericValue);
    }

    return (
        <>
        <Layout />
        <form className="Auth" onSubmit={handleSubmit}>
        <input type="text" value={pass} onChange={handleInput}/>
        <button type="submit">submit</button>
        </form>
        </>
    )
}

export default Auth;