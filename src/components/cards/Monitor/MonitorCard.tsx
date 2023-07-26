'use client'
import React from 'react'
import DeleteModal from './Modal/DeleteModal';

interface Props {
    username: string;
    name: string;
    monitoringDate: string;
    refetch: () => void;
}


const MonitorCard: React.FC<Props> = ({ name, username, monitoringDate,refetch }) => {
    return (
        <div className='outside-box min-w-[200px]'>

            <div className='border-1 border-purple-800 p-8 flex flex-col text-blue-400 rounded-xl inside-box justify-center text-center'>
                <div onClick={() => window.open(`https://twitter.com/${name}`, '_blank')}>
                    {/* <div className='text-center my-2'>
                        <p className='text-md'>{username}</p>
                        <p className='text-xs text-sky-200'>username</p>
                    </div> */}
                    <div className='text-center my-2'>
                        <p className='text-xl'>{name}</p>
                        <p className='text-xs text-sky-200'>screen name</p>
                    </div>
                </div>
                {/* <div className='text-center my-2'>
                    <p className='text-xl'>{new Date(monitoringDate).toLocaleDateString()}</p>
                    <p className='text-xs text-sky-200'>Started Monitoriing</p>
                </div> */}
                    <DeleteModal account={name} refetch={refetch} />
            </div>
        </div>
    )
}

export default MonitorCard
