import React from 'react'
import ManualTrack from '../Modals/ManualTrack'
import Refresh from '../buttons/Refresh'
import ManualAddList from '../Modals/ManualAddList'

interface Props {

}

const Header: React.FC<Props> = () => {
    return (
        <div className='bg-slate-900 h-24'>
            <div className='flex justify-between items-center h-full mx-32'>
                <div className='flex justify-between gap-x-2 lg:gap-x-12'>

                    <a className='bg-purple-900 text-amber-400 rounded-3xl hover:scale-125 p-5' href='/application'>Home</a>
                    <a className='bg-purple-900 text-amber-400 rounded-3xl hover:scale-125 p-5' href='/application/history'>Added</a>
                    {/* <a className='bg-purple-900 text-amber-400 rounded-3xl hover:scale-125 p-5' href='/application/deleted'>Ignored</a> */}
                    <ManualTrack/>
                    <ManualAddList/>
                    <a href='/' className='bg-red-900 text-amber-400 rounded-3xl hover:scale-125 p-5'>Log Out</a>
                </div>
    
                <div className='text-lg lg:text-3xl text-white'>Twitter CREEP Follows</div>
                <Refresh/>
            </div>

        </div>
    )
}

export default Header
