import { getTotalUnfollowed } from "@/components/utils/supabase";
import { useState } from "react";

const ListLength = ({ following, listStatus,updated ,loading}: { following: any, listStatus: boolean | null, updated: string,loading:boolean }) => {
    const timeOfDate = updated? new Date(updated).getTime():0;
    const getNum = async () => {
        let num = 0;
        if (listStatus == null) {
            const res = await getTotalUnfollowed();
            
            return Number(res).toLocaleString('en-US');
        } else {
            following.forEach((item: { jk_follows: boolean | null }) => {
                if (item.jk_follows == listStatus) {
                    num++;
                }
            })
            return Number(num).toLocaleString('en-US');
        }

    }

    if (loading) {
        return (
            <div className='2xl:col-start-2 col-span-1'>
                <h1 className='text-amber-400 text-5xl text-center my-2'>List Length <span className='animate-pulse text-gray-400'>000</span></h1>
                <h1 className=' text-right text-2xl mt-8 text-white flex flex-row'>
                    <p>Last Updated: </p>
                    {updated ? (

                        <>
                            <p className='text-sky-500 px-8'> {new Date(updated).toLocaleDateString()}</p>
                            <span className='text-'>{new Date(timeOfDate + 4 * 60 * 60 * 1000).toLocaleTimeString()}</span>
                        </>
                    )
                        : (<></>)}
                </h1>
            </div>
        )
    }
    return (
        <div className='flex flex-row justify-between'>
            <h1 className='text-center  text-amber-400 text-5xl  my-2'>List Length: {getNum()}</h1>
            <h1 className=' text-right text-2xl mt-8 text-white flex flex-row'>
                <p>Last Updated: </p>
                {updated ? (

                    <>
                        <p className='text-sky-500 px-8'> {new Date(updated).toLocaleDateString()}</p>
                        <span className='text-'>{new Date(timeOfDate + 4 * 60 * 60 * 1000).toLocaleTimeString()}</span>
                    </>
                )
                    : (<></>)}
            </h1>
        </div>
    )
}
export default ListLength;