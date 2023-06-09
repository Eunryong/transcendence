import { useState } from 'react';
import './Home.css';

// room list

const Room = () => {
    const [room, setRoom] = useState(false);
    const roomClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.innerText === "Game" && room === false) {
            return ;
        }
        if (e.currentTarget.innerText === "Chat" && room === true) {
            return ;
        }
        console.log(room);
        setRoom(!room);
        //db get
    }
    return (
        <>
        <div className="Room" >
            <button className='Button' onClick={roomClick}>Game</button>
            <button className='Button' onClick={roomClick}>Chat</button>
        {
            room ? <h1>CHAT</h1> : <h1>GAME</h1>
        }
        </div>
        </>
    )
}

export default Room;