'use client'
import React,{useState} from 'react'

interface Props {
    
}

const Refresh: React.FC<Props> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const refreshAll = async () => {
        setIsLoading(prev => true);
        await fetch('https://twit-bot-joe-024adbd685fc.herokuapp.com/api/start');
        setTimeout(() => {
            setIsLoading(prev => false);
        }, 10000);
    }
    return (
            <button onClick={refreshAll} disabled={isLoading} className={`text-xl text-sky-300 hover:scale-150 hover:text-sky-800 ${isLoading&&'animate-pulse text-slate-500'} `}>{isLoading?'Refreshing...':'Refresh'}</button>
        
    )
}

export default Refresh
