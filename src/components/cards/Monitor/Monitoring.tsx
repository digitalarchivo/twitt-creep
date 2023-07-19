'use client'
import React,{useState,useEffect} from 'react'
import MonitorCard from './MonitorCard';
import { supabase } from '../../../../supabse';
import { useRouter } from 'next/navigation';

interface Props {
    monitors:{
        account:string;
        username:string;
        description:string;
        created_at:string;
    }[]

}

const Monitoring: React.FC<Props> = ({monitors}) => {
    const [posts, setPosts] = useState(monitors)
    const router = useRouter()

    useEffect(() => {
      setPosts(monitors)
    }, [monitors])
  
    const refetch = () => {
        console.log('refetching')
        router.refresh();
    }
    useEffect(() => {
      const channel = supabase
        .channel('*')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'Tracking' }, (payload) =>
          setPosts((posts: any) => [...posts, payload.new])
        )
        .subscribe()
        const channel2 = supabase
        .channel('*')
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'Tracking' }, (payload) =>
          setPosts((posts: any) => [...posts, payload.new])
        )
        .subscribe()
  
        console.log(channel2)
      return () => {
        supabase.removeChannel(channel)
      }
    }, [monitors])
    return (
        <pre className='flex flex-wrap flex-row gap-12 m-8 justify-center '>
            {posts.map((item, index) => (
                    <MonitorCard key={index} monitoringDate={item.created_at} name={item.account} username={item.username} refetch={refetch}/>
                ))}
        </pre>
    )
}

export default Monitoring
