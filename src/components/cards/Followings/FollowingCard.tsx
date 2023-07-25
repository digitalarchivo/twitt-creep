import React from 'react'
import Image from 'next/image'
import avatar2 from "../../../../public/assets/avatar2.png"
import Add from '@/components/buttons/Add';
import Followers from './Followers';
import Link from 'next/link';
import Track from '@/components/buttons/Track';

interface Props {
    bio: string | null;
    name: string;
    username: string;
    createdAt: string;
    followers: string[];
    tracked: string[];

}
function createHyperlinks(description: string) {
    const words = description.split('\n'); //split by space to get each word
    // const output: string[] = []; //to hold our output
    let output: React.JSX.Element[] = [];

    words.forEach((word) => {
        if (word.startsWith('@') || word.includes('http') || word.includes('.io') || word.includes('.com') || word.startsWith('#') || word.startsWith('github')) {
            let newWord = word.split(' ')
            newWord.forEach((word) => {
                if (word.startsWith('http') || word.startsWith('github')) {
                    //If the word starts with 'htt', it is treated as a URL link
                    output.push(<a className="text-blue-400" href={word.replace(',', '')} target="_blank">{word}</a>);
                } else if (word.startsWith('@')) {
                    //If the word starts with '@', create a link to a Twitter profile
                    output.push(<a className="text-blue-400" href={`https://twitter.com/${word}`} target="_blank">{word}{''}</a>);
                } else if (word.endsWith('.io')) {
                    output.push(<a className="text-blue-400" href={`${word.replace(',', '')}`} target="_blank">{word}</a>);
                } else if (word.startsWith('#')) {
                    //If the word starts with '#', create a link to a Twitter profile
                    output.push(<a className="text-blue-400" href={`https://twitter.com/search?q=%23${word.replace('#', '')}&src=hashtag_click`} target="_blank">{word}{''}</a>);
                }
                else {
                    output.push(<p>{word}</p>);
                }
            })

        } else if (word.includes('.com')) {
            //If the word starts with 'htt', it is treated as a URL link
            output.push(<a className="text-blue-400" href={word} target="_blank">{word}</a>);
        } else if (word.includes('@')) {
            const wordArray = word.split('@');
            const word1 = wordArray[0].trim();
            const word2 = '@'.concat(wordArray[1]).split(' ')[0].split('\n')[0].replace("%7C", "|").replace(',', '').replace(';', '').replace('.', '');
            output.push(<p>{word1}</p>);
            output.push(<a className="text-blue-400" href={`https://twitter.com/${word2}`} target="_blank">{word2}</a>);
        } else {
            //If the word does not start with '@' or 'htt', it is added to the output as is
            output.push(<p>{word}</p>);
        }
    });

    return output;
}

const FollowingCard: React.FC<Props> = ({ name, username, bio, createdAt, followers,tracked }) => {

  
    return (
        <div className=' w-full bg-gray-200 text-center rounded-2xl m-1 relative'>
            <div className='flex flex-row '>
                <Link href={`https://twitter.com/${name}`} target='blank' >
                    <div className=' flex flex-row'>
                        <div className='flex flex-col ml-2'>
                            <Image
                                src={avatar2}
                                alt='Picture of the author'
                                width={90}
                                height={90}
                            />
                        </div>

                    </div>

                </Link>

                <div className='flex flex-row justify-between w-full '>
                    <Link href={`https://twitter.com/${name}`} target='blank' >
                        <div className='flex flex-col mt-2'>
                            <p className='text-lg text-left text-blue-700'>{name}</p>
                            <p className='text-lg text-left text-blue-400'>{username}</p>
                        </div>
                    </Link>

                    <div className='flex flex-col mt-4 gap-y-2'>
                        <Followers followers={followers} />
                        <Add username={name} />
                        <Track username={username} account={name} description={bio} tracking={tracked} />
                    </div>
                </div>
            </div>
            <div className='col-span-3 flex flex-col '>
                {bio && (

                    <div className='text-left mx-4 ml-24 flex flex-wrap gap-x-1 pb-2'>
                        {createHyperlinks(bio)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FollowingCard
