import LogIn from '@/components/buttons/LogIn';
import { getLastLogIn } from '@/components/utils/supabase';
import React from 'react'

interface Props {
    
}

export default async function page({}: Props) {
    
    const signIn = await getLastLogIn();
      // @ts-ignore
    console.log(signIn[0]);
    // @ts-ignore
    console.log('last logged  in', new Date(signIn[0].last_logged_in))

    return (
        <div className='flex  h-screen justify-center items-center '>
            <div className='h-40 w-80  text-5xl text-white outside-box text-center hover:scale-125 hover:bg-blue-800'>
                {/* @ts-ignore */}
                
                <LogIn logIn={signIn[0].last_logged_in}/>
            </div>
        </div>
    )
}

