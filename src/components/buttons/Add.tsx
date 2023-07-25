'use client'
import React from 'react'
import { addToList } from '../utils/supabase';

interface Props {
    username: string;
    reload: () => void
    state: any
    size?: boolean
}
const Add: React.FC<Props> = ({ username, reload, state, size }) => {

    const [added, setAdded] = React.useState<any>(state);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleAdd = async () => {
        // addToLocalStorage(username);
        setIsLoading(prev => true);
        addToList(username, true).then((res) => {
            setAdded(false);
            reload();
            setIsLoading(prev => false);
        })
    };
    const handleUndAdd = async () => {
        setIsLoading(prev => true);
        addToList(username, null).then((res) => {
            setAdded(false);
            reload();
            setIsLoading(prev => false);
        })
    };
    if (isLoading && !size) {
        return (
            <button className={`bg-purple-400 text-xs text-white w-20 h-8  mr-2 rounded-full hover:scale-110 animate-pulse`}>
                Loading...
            </button>
        )
    }
    if (isLoading && size) {
        return (
            <button className={`bg-purple-500 text-2xl text-white w-full h-full mr-2 rounded-full hover:scale-110 animate-pulse`}>
                Loading...
            </button>
        )
    }
    if (added && !size) {
        return (
            <button onClick={handleUndAdd} className={`bg-amber-400 text-xs text-white w-20 h-8  mr-2 rounded-full hover:scale-110`}>
                Added
            </button>
        )
    }
    else if (added && size) {
        return (
            <button onClick={handleUndAdd} className={`bg-amber-400 text-2xl text-white w-full h-full mr-2 rounded-full hover:scale-110`}>
                Remove from List
            </button>
        )
    }

    else {

        if (size) {
            return (
                <button onClick={handleAdd} className={`bg-green-400 text-5xl text-white w-full h-full mr-2 rounded-full hover:scale-110`}>
                    +
                </button>
            )
        } else {


            return (
                <button onClick={handleAdd} className={`${!added ? 'bg-blue-400' : 'bg-amber-400'} text-xs text-white w-20 h-8  mr-2 rounded-full hover:scale-110`}>
                    {added ? 'Added' : 'Add'}
                </button>
            )
        }
    }
}

export default Add
