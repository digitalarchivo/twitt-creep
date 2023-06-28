import React from 'react'
import Image from 'next/image'
import avatar1 from "@assets/avatar1.png"
import avatar2 from "../../../../public/assets/avatar2.png"

interface Props {
    bio: string | null;
    name: string;
    username: string;
    createdAt: string;

}

const FollowingCard: React.FC<Props> = ({name,username,bio,createdAt}) => {
    return (
        <div className=' w-[500px] bg-gray-200 text-center rounded-2xl m-4'>
            <div className='flex flex-row '>
                <a className='' href={`https://twitter.com/${username}`} target='blank'>
                    <div className=' flex flex-row'>
                        <div className='flex flex-col ml-2'>
                            <Image
                                src={avatar2}
                                alt='Picture of the author'
                                width={90}
                                height={90}
                            />
                            <p className='text-sm'>{new Date(createdAt).toLocaleDateString()}</p>
                            <p className='text-xs text-sky-400'>Followed on</p>
                        </div>

                    </div>

                </a>

                <div className='flex flex-row justify-between w-full '>
                    <a href={`https://twitter.com/${username}`} target='blank'>
                        <div className='flex flex-col mt-2'>
                            <p className='text-lg text-left text-blue-700'>{name}</p>
                            <p className='text-lg text-left text-blue-400'>{username}</p>
                        </div>
                    </a>

                    <button className='bg-blue-400 text-xs text-white w-20 h-8 mt-8 mr-2 rounded-full hover:scale-110'>Follow</button>
                </div>
            </div>
            <div className='col-span-3 flex flex-col m-2'>
                    <p className='text-left mx-4 m-2 '>
                        {bio}
                    </p>
            </div>
        </div>
    )
}

export default FollowingCard
