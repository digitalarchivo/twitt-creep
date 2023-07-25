'use client'
import React, { useEffect } from 'react'
import { addTracking, deleteTracking } from '../utils/supabase';

interface Props {
    username: string;
    account: string;
    description?: string | null;
    tracking: string[]

}

const Track: React.FC<Props> = ({ username, account, description, tracking }) => {
    let added = false;
    tracking.forEach(element => {
        // @ts-ignore
        if (element.account == account) {
            added = true;
        }
    });
    const [isAdded, setIsAdded] = React.useState(added);
    useEffect(() => {
        return () => {
            // cleanup
        }
    }, [tracking])

    const onAdd = () => {
        console.log('add');
        added = true;
        addTracking(account, username, description ? description : '').then((res) => {
            console.log(res);
            setIsAdded(prev=>true);
            window.location.reload();
        })
    }
    const onDelete = () => {
        console.log('delete');
        added = false;
        deleteTracking(account).then((res) => {
            setIsAdded(prev=>false);
            console.log(res);
            window.location.reload();
        })
    }
    if (!isAdded) {
        return (

            <button onClick={onAdd} className={`text-xs text-white w-20 h-8  mr-2 rounded-full hover:scale-110 bg-purple-500`}>
                Track
            </button>
        )
    } else {
        return (
            <button onClick={onDelete} className={`text-xs text-white w-20 h-8  mr-2 rounded-full hover:scale-110 bg-green-500`}>
                Tracking
            </button>
        )
    }
}

export default Track
