import GetDoc from '@/components/buttons/GetDoc';
import FollowingContainer from '@/components/cards/Followings/FollowingContainer';
import { getAllFollowings } from '@/components/utils/supabase';
// import Reactfrom 'react';

interface Props {

}

export default async function page({ }: Props) {


    // @ts-ignore
    const acct = await getAllFollowings();



    return (
        <div className='text-center m-24'>
            {/* <div className='text-5xl text-white '>Pick Your Dates</div>
            <form>
                <label className='text-3xl text-white' htmlFor="dateInput">Date:</label>
                <input
                    id="dateInput"
                    type="date"
                    className='bg-gray-800 text-white m-4 text-3xl'
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </form> */}
            <div className=''>
                <GetDoc />
                {acct && acct.length > 0 && (
                    <FollowingContainer accts={acct} listStatus={false} />
                )}
            </div>
        </div>
    )
}

