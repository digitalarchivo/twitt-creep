'use client'
import React, { useEffect, useState } from 'react'

interface Props {

}

const GetDoc: React.FC<Props> = () => {
    const handleAddAll = () => {

    }
    // @ts-ignore
    const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem('usernames')) || []);

useEffect(() => {
  const handleStorageChange = () => {
    // @ts-ignore
    setAccounts(JSON.parse(localStorage.getItem('usernames')));
  };

  window.addEventListener('storage', handleStorageChange);
  
  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, []);
    if (accounts != null && accounts.length > 0) {

        return (
            <div className='fixed p-4 bg-green-500 flex flex-col text-center rounded-full ml-[4.75rem] opacity-70 xl:opacity-100 hover:opacity-100 '>
                <div className='text-white text-lg'>You are currently saving {accounts.length} accounts</div>
                <button onClick={handleAddAll} className='p-x4 bg-amber-400 rounded-3xl hover:scale-110'>Add To List</button>
            </div>
        )
    }
}

export default GetDoc
