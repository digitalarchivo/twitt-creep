import React from 'react'

interface Props {

}

const loading: React.FC<Props> = () => {
    return (
        <div className='text-center m-24'>
            <div className='grid mx-12 grid-cols-1 2xl:grid-cols-3 mt-4'>
                <div className='text-center'>
                    <h1 className='text-amber-400 text-5xl text-center my-2'>List Length 000</h1>
                    <div className='flex flex-row flex-wrap justify-center '>


                        <div className=' w-full bg-gray-200 text-center rounded-2xl m-1 relative'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loading
