import React from 'react'

import './select-user.styles.scss'



const SelectUser = ({users, click}) => {
    const userdetails = users.map(({ id , profilepicture }) =>{
          
        return (
            <div className='select-user' key={id} id={id}>
                <img src={profilepicture}  alt="" onClick={click} key={id } id={id}/>
            </div>
        )
    })
    return (
        userdetails
    )

}

export default SelectUser