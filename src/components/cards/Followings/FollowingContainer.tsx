import React from 'react'
import FollowingCard from './FollowingCard'

interface Props {
    accts:any[]
    
}

const FollowingContainer: React.FC<Props> = ({accts}) => {
    return (
        <div className='2xl:col-start-2 col-span-1'>
         
            <div className='flex flex-row flex-wrap    justify-center '>
                {accts.map((item, index) => (
                    <FollowingCard key={index} bio={item.description} createdAt={item.created_at} name={item.account} username={item.username} followers={item.followed_by}  />    
                ))}
            </div>
        </div>
    )
}

export default FollowingContainer
