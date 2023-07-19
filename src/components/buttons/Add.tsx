'use client'
import React from 'react'

interface Props {
    username: string;

}
const Add: React.FC<Props> = ({ username }) => {
    let usernames = localStorage.getItem('usernames') ? JSON.parse(localStorage.getItem('usernames')!) : [];
    const [added, setAdded] = React.useState<boolean>(usernames != null && usernames.includes(username));
    function addToLocalStorage(username: string) {
        if (typeof window !== 'undefined') {



            let usernames: string[] = localStorage.getItem('usernames') ? JSON.parse(localStorage.getItem('usernames')!) : [];

            if (usernames.includes(username)) {
                setAdded(false);
                usernames = usernames.filter((item) => item !== username);

            } else {
                usernames.push(username);
                setAdded(true);
            }

            localStorage.setItem('usernames', JSON.stringify(usernames));
            window.dispatchEvent(new Event('storage'));
            console.log('username', usernames);
        }
    }
    const handleAdd = () => {
        addToLocalStorage(username);

    };
    return (
        <button onClick={handleAdd} className={`${!added ? 'bg-blue-400' : 'bg-amber-400'} text-xs text-white w-20 h-8  mr-2 rounded-full hover:scale-110`}>
            {added ? 'Added' : 'Add'}
        </button>
    )
}

export default Add
