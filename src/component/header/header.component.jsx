/* eslint-disable eqeqeq */
import React from 'react';
import Hamburger  from '../../assets/hamburger.png'
import SelectUser from '../select-user/select-user.component'
import Logo from '../../assets/logo.jpg'
import './header.styles.scss'

const Header = ({showUser, users, getuser, showuserprofile, currentuser, showComments}) => {
    const userprofile = users.filter((user) => user.id == currentuser)
                              .map(({profilepicture}) => {
                                  return encodeURI(profilepicture)        
                              })
    if(!showUser){
        return (
            <div className='header'>
                <div className='logos'>
                    <img className='hamburger' src={Hamburger} alt="logo" />
                    <img src={Logo} alt="logo" />
                </div>
                <div className='user'>
                    <img src={userprofile[0]} alt="" onClick={showuserprofile}/>
                </div>
            </div>
        )
    } else {
        return(
            <>
            <div className='header'>
                <div className='logos'>
                    <img className='hamburger' src={Hamburger} alt="logo" />
                    <img src={Logo} alt="logo" />
                </div>
                <div className='user'>
                    <img src={userprofile[0]} alt=""/>
                </div>
            </div>
            <SelectUser click={getuser} users={users} />
            </>
        )
    }
}

export default Header;