import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import EditProfile from "../EditProfile";
import Auth from "../Auth";
import Home from "../Home";
import Profile from "../Profile"
import SetProfile from "../SetProfile";
import Chat from "../Chat";
import Note from "../Note";

const Router = () => {

    return (
        <Routes>
            <Route path="Login" element={<Login />} />
            <Route path="EditProfile" element={<EditProfile />} />
            <Route path="auth" element={<Auth />} />
            <Route path="Home" element={<Home />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="SetProfile" element={<SetProfile />} />
            {/* <Route path="Chat" element={<Chat/>} /> */}
            <Route path="Note" element={<Note />}/>
        </Routes>
    )
};
export default Router;