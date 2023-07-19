import React from 'react'

interface Props {
    followers: string[];
}

const Followers: React.FC<Props> = ({followers}) => {
    return (
        <div className='group'>
            <p className='text-sm text-purple-400 '>{followers.length}</p>
            <div className='hidden group-hover:block absolute bg-white rounded-2xl h-32 w-32 text-center p-4 top-0 left-1/2 z-50'>
                <p className='text-gray-400'>Followed By</p>
                {followers.map((follower) => (
                    <p key={follower} className='text-sm text-purple-400'>{follower}</p>
                ))}
            </div>
        </div>
    )
}

export default Followers
