import FollowingContainer from '@/components/cards/Followings/FollowingContainer';
import Monitoring from '@/components/cards/Monitor/Monitoring';
import React, { Suspense } from 'react'
import TwitImage from '@/components/twit/TwitImage';
import GetDoc from '@/components/buttons/GetDoc';
import { getAllFollowingsSince, getLastLogIn, getTracking } from '@/components/utils/supabase';

interface Props {
    
}

type signIn = {

    id: number,
    last_logged_in: string,
    new_amount: null|number,
    last_updated: string,
    time_before: string
  }

export default async function page({}: Props) {
    
    const signIn = await getLastLogIn();

    // @ts-ignore
    const acct = await getAllFollowingsSince(new Date(signIn[0].time_before).toISOString().split('T')[0]);
    // @ts-ignore
    const lastUpdated = new Date(signIn[0].last_updated).toDateString();

    // @ts-ignore
    const lastCheckedIn = new Date(signIn[0].time_before).toDateString();

    
    // @ts-ignore
    console.log('last logged  in', new Date(signIn[0].time_before).toISOString().split('T')[0])
    return (
        <div className='m-2 relative'>
         <TwitImage />
          <h1 className='text-[5rem] my-20 text-center text-sky-600'>Twit CREEP</h1>
          <div className='flex flex-col'>
             <h1 className='text-amber-400 text-5xl text-center'>Monitoring</h1>

             <Suspense fallback={<p>Loading feed...</p>}>

              <Monitoring />
          </Suspense>
            <div className='flex flex-row justify-between'>

            <h1 className='text-sky-200 text-xl xl:text-5xl text-left ml-32'>New Follows</h1>
            <p className='text-sky-200 text-lg xl:text-3xl text-left '>Last Checked In {lastCheckedIn}</p>
            <p className='text-sky-200 text-lg xl:text-3xl text-left '>Last updated {lastUpdated}</p>
            </div>
            <hr />
            <div className='grid mx-12 grid-cols-1 2xl:grid-cols-3 mt-4'>
              <GetDoc/>
              {acct&&(
                // @ts-ignore
            <FollowingContainer accts={acct}  />
              )}
            </div> 
          </div>
        </div>
    )
}
