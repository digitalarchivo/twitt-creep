import React from 'react'
import ManualTrack from '../Modals/ManualTrack'

interface Props {

}

const Header: React.FC<Props> = () => {
    return (
        <div className='bg-slate-900 h-24'>
            <div className='flex justify-between items-center h-full mx-32'>
                <div className='flex justify-between gap-x-2 lg:gap-x-12'>

                    <a className='bg-purple-900 text-amber-400 rounded-3xl hover:scale-125 p-5' href='/'>Home</a>
                    <a className='bg-purple-900 text-amber-400 rounded-3xl hover:scale-125 p-5' href='/history'>History</a>
                    <div className='bg-purple-900 text-amber-400 rounded-3xl hover:scale-125 p-5'>Notifications</div>
                    <div className='bg-purple-900 text-amber-400 rounded-3xl hover:scale-125 p-5'>Send DM</div>
                    <ManualTrack/>
                </div>
    
                <div className='text-lg lg:text-3xl text-white'>Twitter CREEP Follows</div>
            </div>

        </div>
    )
}

export default Header
