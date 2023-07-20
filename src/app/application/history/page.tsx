'use client'
import GetDoc from '@/components/buttons/GetDoc';
import FollowingContainer from '@/components/cards/Followings/FollowingContainer';
import { getAllFollowingsSinceFull } from '@/components/utils/supabase';
import React, { useState } from 'react'

interface Props {

}

const page: React.FC<Props> = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [acct, setAcct] = useState<any[]>([]);
    // @ts-ignore
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        // @ts-ignore
        getAllFollowingsSinceFull(event.target.value).then((res) => {
            setAcct(() => res)
            console.log(acct)
        });

    }
    console.log(selectedDate)
    return (
        <div className='text-center m-24'>
            <div className='text-5xl text-white '>Pick Your Dates</div>
            <form>
                <label className='text-3xl text-white' htmlFor="dateInput">Date:</label>
                <input
                    id="dateInput"
                    type="date"
                    className='bg-gray-800 text-white m-4 text-3xl'
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </form>
            <div className='grid mx-12 grid-cols-1 2xl:grid-cols-3 mt-4'>
                <GetDoc />
                {acct && acct.length > 0 && (
                    <FollowingContainer accts={acct} />
                )}
            </div>
        </div>
    )
}

export default page
