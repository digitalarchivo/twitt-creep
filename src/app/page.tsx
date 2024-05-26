import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

const LogIn = dynamic(() => import('@/components/buttons/LogIn')); // Dynamically import LogIn component
import { getLastLogIn } from '@/components/utils/supabase';
import React, { useEffect, useState } from 'react';

interface Props {}

const Page: React.FC<Props> = () => {
    const [lastLogIn, setLastLogIn] = useState<string | null>(null);

    useEffect(() => {
        const fetchLastLogIn = async () => {
            try {
                const signIn = await getLastLogIn();
                console.log('sign in', signIn);
                if (signIn && signIn.length > 0) {
                    setLastLogIn(signIn[0].last_logged_in);
                }
            } catch (error) {
                console.error('Error fetching last login:', error);
            }
        };

        fetchLastLogIn();
    }, []);

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='h-40 w-80 text-5xl text-white outside-box text-center hover:scale-125 hover:bg-blue-800'>
                <LogIn logIn={lastLogIn} />
            </div>
        </div>
    );
};

export default Page;
