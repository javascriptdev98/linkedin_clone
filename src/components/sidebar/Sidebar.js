import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import banner from "../../assets/banner.png"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);
    const recentItem = (topic) => {
        return (<div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>

        </div>);
    }
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src={banner} />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed You</p>
                    <p className='sidebar__statNumber'>2543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2000</p>
                </div>

            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('javascript')}
                {recentItem('Html')}
                {recentItem('Developer')}

            </div>
        </div>
    )
}

export default Sidebar