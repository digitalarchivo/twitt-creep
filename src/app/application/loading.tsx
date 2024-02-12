import React from 'react'

interface Props {

}

const loading: React.FC<Props> = () => {
    return (
        <div className='m-2 relative'>
            <h1 className='text-[5rem] my-6 text-center text-sky-600'>Twit CREEP</h1>

            {/* <div className='text-center text-5xl text-green-400 flex flex-row justify-center gap-x-4'>
          <p className='text-white'>Next update:</p>
          <Countdown targetDate={new Date(signIn[0].last_updated)} />
        </div> 
        */}
            <div className='flex flex-col'>
                <h1 className='text-amber-400 text-5xl text-center '>Monitoring</h1>
                <h3 className='text-purple-600 mt-4 text-4xl text-center my-12'>Total Scraped:<span className="text-purple-600 font-bold font-serif animate-pulse">0000</span></h3>
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
            </div>
        </div>
    )
}

export default loading
