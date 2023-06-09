import { useNavigate } from 'react-router-dom';
import logo from '../image/123.png';
import './Layout.css';

// image

const Layout = () => {
    const move = useNavigate();
    const onClick = () => {
        console.log("1");
        move("/profile");
    }

    const logout = () => {
        move("/login");
    }
    
    const goHome = () => {
        move("/home");
    }

    return (
        <>
        <header className="header">
            <button className='logout' onClick={logout}>LogOut</button>
            <button className='home' onClick={goHome}>Home</button>
            <img className='image' src={logo} alt='image' onClick={onClick} />
        </header>
        <footer className='footer' />
        </>
    )
    
}

export default Layout;