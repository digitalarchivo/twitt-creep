import React from 'react'
import FollowingCard from './FollowingCard'

interface Props {
    accts:any[]
    
}

const FollowingContainer: React.FC<Props> = ({accts}) => {
    return (
        <div>
            <hr />
            <div className='flex flex-row flex-wrap  gap-12 m-2 lg:m-8 justify-center '>
                {accts.map((item, index) => (
                    <FollowingCard key={index} bio={item.bio} createdAt={item.createdAt} name={item.name} username={item.username}  />    
                ))}
            </div>
        </div>
    )
}

export default FollowingContainer
