import LogIn from '@/components/buttons/LogIn';
import { getLastLogIn } from '@/components/utils/supabase';
import React from 'react'

interface Props {
    
}

export default async function page({}: Props) {
    
    const signIn = await getLastLogIn();
    console.log('sign in',signIn);

    return (
        <div className='flex  h-screen justify-center items-center '>
            <div className='h-40 w-80  text-5xl text-white outside-box text-center hover:scale-125 hover:bg-blue-800'>
                {/* @ts-ignore */}
                
                <LogIn logIn={signIn[0].last_logged_in}/>
            </div>
        </div>
    )
}

