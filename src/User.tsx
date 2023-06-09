import { useState } from "react";
import "./Home.css";

//user, friend list

const User = () => {
    const [user, setUser] = useState(false);

    const userClick = (e:any) => {
        if (e.currentTarget.innerText === "Online" && user === false) {
            return ;
        }
        if (e.currentTarget.innerText === "Friends" && user === true) {
            return ;
        }
        console.log(user);
        setUser(!user);
        return ;
    }
    return (
        <>
        <div className='User'>
            <button className='Button' onClick={userClick}>Online</button>
            <button className='Button' onClick={userClick}>Friends</button>
        {
            user ? <h1>Friends</h1> : <h1>Online</h1>
        }
        </div>
        </>
    )
}

export default User;