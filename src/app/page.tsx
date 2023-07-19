import FollowingContainer from '@/components/cards/Followings/FollowingContainer';
import Monitoring from '@/components/cards/Monitor/Monitoring';
import React from 'react'
import TwitImage from '@/components/twit/TwitImage';
import GetDoc from '@/components/buttons/GetDoc';
import { getAllFollowingsSince, getLastLogIn, getTracking } from '@/components/utils/supabase';


interface Props {
    
}

export const revalidate = 0
export default async function page({}: Props) {
    const monitored = await getTracking();
    const signIn = await getLastLogIn();
    const acct = await getAllFollowingsSince(signIn.last_logged_in);
    const lastUpdated = new Date(signIn.last_updated).toDateString();

    console.log('monitored', monitored)
    return (
        <div className='m-2 relative'>
         <TwitImage />
          <h1 className='text-[5rem] my-20 text-center text-sky-600'>Twit CREEP</h1>
          <div className='flex flex-col'>
             <h1 className='text-amber-400 text-5xl text-center'>Monitoring</h1>
            {monitored?(
            // @ts-ignore
              <Monitoring monitors={monitored} />
              ):(
                <div className='text-amber-400 text-5xl text-center'>No Monitored Accounts</div>
              )}
              
            <div className='flex flex-row justify-between'>

            <h1 className='text-sky-200 text-xl xl:text-5xl text-left ml-32'>New Follows</h1>
            <p className='text-sky-200 text-lg xl:text-3xl text-left '>Last updated {lastUpdated}</p>
            </div>
            <hr />
            <div className='grid mx-12 grid-cols-1 2xl:grid-cols-3 mt-4'>
              <GetDoc/>
            <FollowingContainer accts={acct} />
            </div> 
          </div>
        </div>
    )
}
