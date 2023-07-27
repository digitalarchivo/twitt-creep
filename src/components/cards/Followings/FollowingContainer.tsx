'use client'
import React, { useState, useEffect } from 'react'
import FollowingCard from './FollowingCard'
import { getAllFollowings, getAllFollowingsForFalse, getAllFollowingsForNull, getLastUpdated, getTracking, massAdoption } from '@/components/utils/supabase'
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
    const [updated, setUpdated] = useState<any>('');

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
        if(listStatus == null){

            const res2 = await getAllFollowingsForNull();
            setFollowing(res2);
        }else if (listStatus == true) {
            const res2 = await getAllFollowings();
            setFollowing(res2);
        }else{
            const res2 = await getAllFollowingsForFalse();
            setFollowing(res2);
        }
        const lastUpdated = await getLastUpdated();
        // @ts-ignore
        setUpdated(lastUpdated[0].last_updated);
        
        setIsLoading(false);
    }
    useEffect(() => {
        getData();
        return () => {
            // here you can clean the effect in case the component gets unmonth before the async function ends
        }
    }, [])
    const getList = () => {
        let listOfAccts: any[] = [];
        following.forEach((item: { jk_follows: boolean | null, account: string }) => {
            if (item.jk_follows == listStatus) {
                listOfAccts.push(item);
            }
        })
        return listOfAccts;
    }
    const addAll = async () => {
        massAdoption(getList(), true).then((res) => {
            reload();
        }).catch((err) => {
            console.log(err);
            reload();
        })
    }
    const ignoreAll = async () => {
        massAdoption(getList(), false).then((res) => {
            reload();
        }).catch((err) => {
            console.log(err);
            reload();
        })
    }
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
            <div className='flex flex-row justify-between'>
                <h1 className='text-center  text-amber-400 text-5xl  my-2'>List Length: {getNum()}</h1>
                <h1 className=' text-right text-2xl mt-8 text-white flex flex-row'>
                    <p>Last Updated: </p>
                    {updated ? (

                        <>
                            <p className='text-sky-500 px-8'> {new Date(updated).toLocaleDateString()}</p>
                            <span className='text-'>{new Date(updated).toLocaleTimeString()}</span>
                        </>
                    )
                        : (<></>)}
                </h1>
            </div>
            <hr />
            <div className=' '>
                {window.location.href.endsWith('application') && (
                    <div className='flex flex-row justify-between'>
                        <button onClick={ignoreAll} className='p-8 bg-red-500 rounded-full text-white text-5xl m-4 hover:scale-150 border-4 border-white'>Ignore All</button>
                        <button onClick={addAll} className='p-8 bg-green-500 rounded-full text-white text-5xl m-4 hover:scale-150 border-4 border-white'>Add All</button>
                    </div>
                )}
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
