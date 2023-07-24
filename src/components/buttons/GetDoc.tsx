'use client'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
interface Props {
}

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
  },
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      backgroundColor: 'transparent',
      border: 'none',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
  },
  AnimationEffect: {
      enter: 'ease-out',
      exit: 'ease-in',
  },

};
const GetDoc: React.FC<Props> = () => {
  const handleAddAll = () => {
    console.log('accounts to print',JSON.stringify(accounts));
    setIsLoading(prev=>true);
    setIsOpen(true);
    fetch('https://twit-bot-joe-024adbd685fc.herokuapp.com/api/createList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accounts)
    })
      .then(response => response.json())
      .then((data) => {
        setIsLoading(prev=>false);
        setIsOpen(false);
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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //   subtitle.style.color = '#f00';
  }

  function closeModal() {
      setIsLoading(prev => false);
      setIsOpen(false);

  }
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
        <div className={`${isLoading?'absolute flex h-[90vh] w-[70-vw] opacity-50 bg-slate-700 text-center':'hidden'}`}>Adding to list........</div>
        <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
                contentLabel="Remove Collateral Modal"
            >
                <div className={`border-2 border-purple-800 p-12 flex flex-col text-blue-400 rounded-xl inside-box ${isLoading&& 'shadow-xl shadow-red-700'}`}>
                    <div className='text-center my-2'>
                        {isLoading && (
                            <div className='animate-pulse'>
                                <p className='text-xl'>Deleting Monitored Account from DB</p>
                                <button  className='bg-purple-600 p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-gray-500'>------------------</button>
                                <button  className='bg-red-600 p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-gray-500'>----------------------------------------------------------</button>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
      </div>
    )
  }
}

export default GetDoc
