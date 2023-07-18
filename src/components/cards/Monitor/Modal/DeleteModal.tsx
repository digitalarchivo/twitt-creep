'use client';
import React,{useState,useEffect,useRef} from 'react';
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
const DeleteModal: React.FC<Props> = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //   subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal} className='text-white bg-red-500 p-4 rounded-full hover:scale-110'>Stop Monitoring</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
                contentLabel="Remove Collateral Modal"
            >
                <div className='border-2 border-purple-800 p-12 flex flex-col text-blue-400 rounded-xl inside-box'>
                    <div className='text-center my-2'>
                        <p className='text-xl'>Are you sure you want to stop monitoring?</p>
                        <button onClick={closeModal} className='bg-purple-600 p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-white'>I&#39;m a pussy Bitch</button>
                        <button className='bg-red-600 p-3 rounded-2xl mx-8 mt-6 hover:scale-125 text-white'>I am a man that knows what he is doing Delete the Damn thing</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteModal
