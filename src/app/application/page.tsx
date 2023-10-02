import FollowingContainer from '@/components/cards/Followings/FollowingContainer';
import Monitoring from '@/components/cards/Monitor/Monitoring';
import React, { Suspense } from 'react'
import TwitImage from '@/components/twit/TwitImage';
import GetDoc from '@/components/buttons/GetDoc';
import { getAllFollowings, getLastLogIn ,getAllProccessed} from '@/components/utils/supabase';
import Countdown from '@/components/countdowns/Countdown';
import TotalAmount from '@/components/cards/Other/TotalAmount';
import { type } from 'os';

interface Props {

}

type signIn = {

  id: number,
  last_logged_in: string,
  new_amount: null | number,
  last_updated: string,
  time_before: string
}

export default async function page({ }: Props) {

  const signIn = await getLastLogIn();

  // @ts-ignore
  const acct = await getAllFollowings();

  const totalAmount = await getAllProccessed();
  // @ts-ignore
  const lastUpdated = new Date(signIn[0].last_updated).toLocaleDateString();

  // @ts-ignore
  const lastCheckedIn = new Date(signIn[0].time_before).toLocaleDateString();
  return (
    <div className='m-2 relative'>
      <TwitImage />
      <h1 className='text-[5rem] my-6 text-center text-sky-600'>Twit CREEP</h1>
      
      {/* <div className='text-center text-5xl text-green-400 flex flex-row justify-center gap-x-4'>
        <p className='text-white'>Next update:</p>
        <Countdown targetDate={new Date(signIn[0].last_updated)} />
      </div> 
      */}
      <div className='flex flex-col'>
        <h1 className='text-amber-400 text-5xl text-center'>Monitoring</h1>

        <TotalAmount totalAmount={totalAmount}/>

        <Suspense fallback={<p>Loading feed...</p>}>

          <Monitoring />
        </Suspense>
        <div className='flex flex-row justify-between'>

        </div>
      
          {/* <GetDoc /> */}
          {acct && (
            // @ts-ignore
            <FollowingContainer accts={acct} listStatus={null} />
          )}
      </div>
    </div>
  )
}
