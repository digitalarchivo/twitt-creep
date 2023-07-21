'use client'
import React, { useEffect, useState } from 'react'

interface Props {
}
const GetDoc: React.FC<Props> = () => {
  const handleAddAll = () => {
    console.log(accounts);
    fetch('http://127.0.0.1:5000/api/createList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accounts)
    })
      .then(response => response.json())
      .then((data) => {
        console.log('Success:', data)
        localStorage.removeItem('usernames');
        setAccounts([]);
        window.location.reload();
      })
      .catch((error) => console.log('Error:', error));
  }

  const ISSERVER = typeof window === "undefined";

  let accounts1 = null;
if (!ISSERVER) {
   accounts1 = JSON.parse(localStorage.getItem('usernames') || '[]');
  // Rest of the code
}
  const [accounts, setAccounts] = useState<string[] | []>(accounts1? accounts1: []);

  useEffect(() => {
    const handleStorageChange = () => {

      const accounts1 = JSON.parse(localStorage.getItem('usernames') || '[]');
      setAccounts(prev => accounts1);

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
