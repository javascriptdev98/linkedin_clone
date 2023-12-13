import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../assets/linkedin-logo.png"
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase/firebase';


function Header() {

    const dispatch = useDispatch();


    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();

    };

    return (
        <div className='header'>

            <div className='header__left'>
                <img src={logo} />
                <div className='header__search'>
                    {/* search icon */}
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>

            </div>
            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />


            </div>
        </div>
    )
}

export default Header