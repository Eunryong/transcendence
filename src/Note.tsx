import React, { useState } from 'react';
import Layout from './Layout/Layout';
import User from './User';
import axios from 'axios';
import './Note.css';

//note history

const Note = () => {
    const [list, setList] = useState<String[]>();
    return (
        <>
        <Layout />
        <div className='Note'>
            <ol>
                {list && list.map((list, index) => (
                    <li key={index}>{list}</li>
                ))}
            </ol>
            <button>쪽찌쓰기</button>
        </div>
        <User />
        </>
    )
}

export default Note;