import React from 'react'

export const Comment = ({data}) =>{

    const { name:userName, text:userReplies}  = data;

    return(
        <div className='flex items-center'>
        <div className='m-3'>
            <img className='h-8 rounded-full' alt='user' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
        </div>
        <div>
            <p className='font-semibold text-xs'>{userName}</p>
            <p className='text-sm'>{userReplies}</p>
        </div>
    </div>
    )
}