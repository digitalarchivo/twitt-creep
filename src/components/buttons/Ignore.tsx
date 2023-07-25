'use client'
import React,{useState} from 'react'
import { addToList } from '../utils/supabase';

interface Props {
    username: string;
    reload: () => void
    state: any
    size?: boolean
}
const Ignore: React.FC<Props> = ({ username, reload, state, size }) => {
    const [added, setAdded] = useState<any>(state);
    const [isLoading, setIsLoading] = useState(false);
    const handleAdd = async () => {
        setIsLoading(prev => true);
        addToList(username, false).then((res) => {
            setAdded(false);
            reload();
            setIsLoading(prev => false);
        })
    };
    const handleUndAdd = async () => {
        // addToLocalStorage(username);
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
            Ignored
        </button>
    )
}
else if (size && window.location.href.endsWith('deleted')) {
    return (
        <button onClick={handleUndAdd} className={`bg-red-500 text-3xl text-white w-full h-full mr-2 rounded-full hover:scale-110`}>
            UnIgnore
        </button>
    )
}

else {

    if (size) {
        return (
            <button onClick={handleAdd} className={`bg-red-500 text-3xl text-white w-full h-full mr-2 rounded-full hover:scale-110`}>
                -
            </button>
        )
    } else {


        return (
            <button onClick={handleAdd} className={`${!added ? 'bg-blue-400' : 'bg-amber-400'} text-xs text-white w-20 h-8  mr-2 rounded-full hover:scale-110`}>
                {added ? 'Ignored' : 'Ignore'}
            </button>
        )
    }
}
}


export default Ignore
