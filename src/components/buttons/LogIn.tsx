'use client'
import React from 'react'
import { signIn } from '../utils/supabase';

interface Props {
    logIn: string
}

const LogIn: React.FC<Props> = ({logIn}) => {
    const [loading, setLoading] = React.useState(false);
    const handleAddAll = async() => {
        setLoading(true);
        //sigin db
        //direct to appliaction
        // await signIn(logIn);
        setTimeout(() => {
            window.location.href = '/application';
            setLoading(false);
        }, 5000);
    }

    return (
        <button onClick={handleAddAll}  className={`mt-[16%] ${loading&& 'animate-pulse'}`}>{loading? 'Loading.....':'Log In'}</button>
    )
}

export default LogIn
