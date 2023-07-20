'use client'
import React,{useState,useEffect} from 'react'
import MonitorCard from './MonitorCard';
import { useRouter } from 'next/navigation';
import { getTracking } from '@/components/utils/supabase';

interface Props {


}

const Monitoring: React.FC<Props> = () => {
    const [posts, setPosts] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if(isLoading){
        getTracking().then((res) => {
            setPosts(res);
        })
        setIsLoading(false);
    }
    posts.length == 0&&setIsLoading(true)
     return () => {
        setIsLoading(false);
      }
    })
  
    const refetch = () => {
        console.log('refetching')
        setIsLoading(true);
        router.refresh();
    }
 
    return (
        <div className='flex flex-wrap flex-row gap-12 m-8 justify-center '>
            {posts.map((item: { created_at: string; account: string; username: string; }, index: React.Key | null | undefined) => (
                    <MonitorCard key={index} monitoringDate={item.created_at} name={item.account} username={item.username} refetch={refetch}/>
                ))}
        </div>
    )
}

export default Monitoring
