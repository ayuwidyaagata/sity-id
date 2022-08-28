import React, {useState} from 'react';
import Logo from '../assets/logo2.png';

function Navbar() {
    const [nav, setnav] = useState(false);

    const ChangeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', ChangeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#" className='logo'>
                <img src={Logo} alt="" />
            </a>
            <input type="checkbox" className='menu-btn' id='menu-btn' />
            <label htmlFor="menu-btn" className='menu-icon'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">UI</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;