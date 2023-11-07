'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { addTracking } from '../utils/supabase';
import { useRouter } from 'next/navigation';

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
type FormData = {
    account: string; username: string; description: string;
};
const ManualTrack: React.FC<Props> = () => {
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
    const { register, handleSubmit, formState: { errors },reset } = useForm<FormData>();

    const router = useRouter();
    const onSubmit = (data: FormData) => {
        console.log(data);
        setIsLoading(prev => true);
        addTracking(data.account, data.username, data.description).then((res) => {
            console.log(res);
        })
        setTimeout(() => {
            console.log('Addition successful.');
            setIsLoading(prev => false);
            setIsOpen(prev => false);
            data.account = '';
            data.username = '';
            data.description = '';
            window.location.reload()
        }, 1000);
    }
    return (
        <div>
            <button onClick={openModal} className='bg-purple-600 text-amber-400 rounded-3xl hover:scale-125 p-5'>Track  Twitter Acc</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
                contentLabel="Remove Collateral Modal"
            >
                <div className={`border-2 border-purple-800 p-12 flex flex-col text-blue-400 rounded-xl inside-box ${isLoading && 'shadow-xl shadow-red-700'}`}>
                    <div className='text-center my-2'>
                        {isLoading ? (
                            <div className='animate-pulse'>
                                <p className='text-xl'>Adding Monitored Account from DB</p>
                                <div className="space-y-6">
                                    {/* Account Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-sky-700">
                                            --------
                                        </label>
                                        <input {...register('account', { required: true })} type="text" required className="mt-1 focus:ring-slate-500 focus:border-slate-500 block w-full sm:text-sm border-gray-700 rounded-md h-12 text-center" />
                                        {errors.account && <p className='text-red-500 animate-pulse'>This field is required.</p>}
                                    </div>

                                   
                                    <div>
                                        <button className='bg-purple-600 p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-white'>--------</button>
                                        <button type="submit" className='bg-blue-600 hover:bg-blue-900 border border-transparent  shadow-sm p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>-------</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p className='text-xl'>Enter in The account to track for next period</p>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Account Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-sky-700">
                                            Account
                                        </label>
                                        <input {...register('account', { required: true })} placeholder="Account(@donaldTrump)" type="text" required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-12 text-center" />
                                        {errors.account && <p className='text-red-500 animate-pulse'>This field is required.</p>}
                                    </div>

                                    <div>
                                        <button onClick={closeModal} className='bg-purple-600 p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-white'>I&#39;m a pussy Bitch</button>
                                        <button type="submit" className='bg-blue-600 hover:bg-blue-900 border border-transparent  shadow-sm p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Add Account</button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ManualTrack
