'use client'
import React from 'react'
import Image from 'next/image'
import twitt from "../../../public/assets/twitter-logo.png"


interface Props {

}

const TwitImage: React.FC<Props> = () => {

    return (
        <div>
                <Image
                    src={twitt}
                    alt="Vercel Logo"
                    width={800}
                    height={800}
                    className='absolute top-1/8  opacity-90 bg-transparent -z-10 '
                />
        </div>
    )
}

export default TwitImage
