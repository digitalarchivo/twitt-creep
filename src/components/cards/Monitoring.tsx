import React from 'react'
import MonitorCard from './MonitorCard';

interface Props {
    monitors:{
        username:string;
        name:string;
        since:string;
    }[]

}

const Monitoring: React.FC<Props> = ({monitors}) => {
    console.log(monitors);
    return (
        <div className='flex flex-wrap flex-row  gap-12 m-8 justify-center '>
            {monitors.map((item, index) => (
                    <MonitorCard key={index} monitoringDate={item.since} name={item.name} username={item.username}/>
                ))}
        </div>
    )
}

export default Monitoring
