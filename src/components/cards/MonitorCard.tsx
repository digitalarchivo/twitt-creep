import React from 'react'

interface Props {
    username:string;
    name:string;
    monitoringDate:string;
}

const MonitorCard: React.FC<Props> = ({name,username,monitoringDate}) => {
    return (
        <div className='outside-box min-w-[500px]'>

            <div className='border-2 border-purple-800 p-12 flex flex-col text-blue-400 rounded-xl inside-box'>
                <a href={`https://twitter.com/${username}`} target='_blank' rel='noreferrer'>
                <div className='text-center my-2'>
                    <p className='text-xl'>{username}</p>
                    <p className='text-xs text-sky-200'>username</p>
                </div>
                <div className='text-center my-2'>
                    <p className='text-xl'>{name}</p>
                    <p className='text-xs text-sky-200'>screen name</p>
                </div>
                </a>
                <div className='text-center my-2'>
                    <p className='text-xl'>{new Date(monitoringDate).toLocaleDateString()}</p>
                    <p className='text-xs text-sky-200'>Started Monitoriing</p>
                </div>
                <button className='text-white bg-red-500 p-4 rounded-full hover:scale-110'>Stop Monitoring</button>

            </div>
        </div>
    )
}

export default MonitorCard
