'use client'
import React, { useState, useEffect } from 'react'
import FollowingCard from './FollowingCard'
import { getAllFollowings, getTracking } from '@/components/utils/supabase'
import { useRouter } from 'next/navigation'
import Add from '@/components/buttons/Add'
import Ignore from '@/components/buttons/Ignore'

interface Props {
    accts: any[]
    listStatus: boolean | null
}

const FollowingContainer: React.FC<Props> = ({ accts, listStatus }) => {
    const [following, setFollowing] = useState<any>(accts);
    const [tracked, setTracked] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const getNum = () => {
        let num = 0;
        following.forEach((item: { jk_follows: boolean | null }) => {
            if (item.jk_follows == listStatus) {
                num++;
            }
        })
        return num;
    }
    const getData = async () => {
        const res = await getTracking()
        setTracked(res);
        const res2 = await getAllFollowings();
        setFollowing(res2);
        setIsLoading(false);
    }
    useEffect(() => {
        getData();
        return () => {
            // here you can clean the effect in case the component gets unmonth before the async function ends
        }
    }, [])
    const reload = async () => {

        await getData();
    }
    if (isLoading) {
        return (
            <div className='2xl:col-start-2 col-span-1'>
                <h1 className='text-amber-400 text-5xl text-center my-2'>List Length <span className='animate-pulse text-gray-400'>000</span></h1>
                <div className='flex flex-row flex-wrap justify-center '>


                    <div className=' w-full h-44 bg-gray-200 text-center rounded-2xl m-1 relative animate-pulse opacity-5'>

                    </div>
                    <div className=' w-full h-44 bg-gray-200 text-center rounded-2xl m-1 relative animate-pulse opacity-5'>

                    </div>
                    <div className=' w-full h-44 bg-gray-200 text-center rounded-2xl m-1 relative animate-pulse opacity-5'>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='text-center'>
                <h1 className='2xl:col-start-2 col-span-1 text-amber-400 text-5xl text-center my-2'>List Length {getNum()}</h1>
            </div>
            <div className=' '>
                {following.map((item: { jk_follows: string | boolean | null; account: string; username: string; description: string | null; created_at: string; followed_by: string[] }, index: any) => (
                    <>
                        {listStatus == item.jk_follows ? (
                            <div className='grid mx-12 grid-cols-1 2xl:grid-cols-12 my-2 '>
                                <div className='hidden 2xl:flex 2xl:col-start-1 2xl:col-span-3 m-4'>

                                    <Ignore username={item.account} reload={reload} state={item.jk_follows} size={true} />
                                </div>
                                <div className='col-span-1  2xl:col-start-4 2xl:col-span-6 2xl:mx-24 '>
                                    {/* @ts-ignore */}
                                    <FollowingCard reload={reload} key={(item.account + item.username).replace(/\n/g, ' ').replace('@', '')} bio={item.description} createdAt={item.created_at} name={item.account} username={item.username} followers={item.followed_by} tracked={tracked} state={item.jk_follows} />
                                </div>
                                <div className='hidden 2xl:flex 2xl:col-start-10 2xl:col-span-3 m-4'>

                                    <Add username={item.account} reload={reload} state={item.jk_follows} size={true} />
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                ))}
            </div>
       
        </>
    )
}

export default FollowingContainer
