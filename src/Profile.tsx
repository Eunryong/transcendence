import img from "./image/123.png";
import "./Profile.css";
import Layout from "./Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// image, nick, rating? , auth, 전적

const Profile = () => {
    const [auth, setAuth] = useState(false);
    const move = useNavigate();
    const handleEdit = () => {
        move("/EditProfile");
    }

    const handleAuth = () => {
        move("/Auth");
    }

    return (
    <>
    <Layout />
        <div className="profile">
            <img
                className="preview-image"
                src={img}
                alt="Preview"
                />
        </div>
        <ol className="list">
            <li>닉네임:</li>
            <li>점수:</li>
            <li>2차인증:
                { 
                auth ? 
                <span>O</span>:
                <>
                <span>X</span><button onClick={handleAuth}>등록하기</button> 
                </>
                }
            </li>
            <button>전적</button>
            <button onClick={handleEdit}>수정</button>
        </ol>
    </>
    )
}

export default Profile;
