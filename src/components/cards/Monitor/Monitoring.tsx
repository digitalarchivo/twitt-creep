import React from 'react'
import MonitorCard from './MonitorCard';

interface Props {
    monitors:{
        account:string;
        username:string;
        description:string;
        created_at:string;
    }[]

}

const Monitoring: React.FC<Props> = ({monitors}) => {
    return (
        <div className='flex flex-wrap flex-row  gap-12 m-8 justify-center '>
            {monitors.map((item, index) => (
                    <MonitorCard key={index} monitoringDate={item.created_at} name={item.account} username={item.username}/>
                ))}
        </div>
    )
}

export default Monitoring
