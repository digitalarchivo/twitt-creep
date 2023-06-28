import FollowingContainer from '@/components/cards/Followings/FollowingContainer';
import Monitoring from '@/components/cards/Monitoring';
import { ReadTextFile } from '@/components/utils/takeText';
import React from 'react'
import { supabase } from '../../supabse';
import Image from 'next/image'
import twitt from "../../public/assets/twitter-logo.png"
import TwitImage from '@/components/twit/TwitImage';


interface Props {
    
}

export default async function page({}: Props) {
    // await fetch('https://api.github.com/users/vercel')
    const response = await fetch('http://localhost:3000/textFiles/Davidhsu.txt');
    const content = await response.text();
    const acct =ReadTextFile(content);
    
    let { data: monitored, error } = await supabase.from('monitored').select('username,name,since')



    console.log('db',monitored);
    console.log(error);
    return (
        <div className='m-2 relative'>
         <TwitImage />
          <h1 className='text-[5rem] my-20 text-center text-sky-600'>Twit CREEP</h1>
          <div className='flex flex-col'>
            <h1 className='text-amber-400 text-5xl text-center'>Monitoring</h1>
            {monitored?(

              <Monitoring monitors={monitored} />
              ):(
                <div className='text-amber-400 text-5xl text-center'>No Monitored Accounts</div>
              )}
            <div className='flex flex-row justify-between'>

            <h1 className='text-sky-200 text-xl xl:text-5xl text-left ml-32'>New Follows</h1>
            <p className='text-sky-200 text-lg xl:text-3xl text-left '>Last updated 12/21/23</p>
            </div>
            <FollowingContainer accts={acct} />
          </div>
        </div>
    )
}
