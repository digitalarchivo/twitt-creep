'use client'
import { getAllProccessed } from "@/components/utils/supabase";
import { useEffect, useState } from "react";

// @ts-ignore
const TotalAmount = (amountProccessed ) => {
  const [procc,setProcc] = useState<any>(amountProccessed);
  const [isLoading,setIsLoading]= useState(true);
    const getData = async () => {
        const res = await getAllProccessed();
        const resss = Number(res).toLocaleString('en-US');
        setProcc(resss);
        setIsLoading(false);
    }
    useEffect(() => {
      getData();
      return () => {
          // here you can clean the effect in case the component gets unmonth before the async function ends
      }
  }, [])
    
  if (isLoading){
    return  <h3 className='text-purple-600 mt-4 text-4xl text-center'>Total Scraped:<span className="text-purple-600 font-bold font-serif animate-pulse">0000</span></h3>

  }

  return amountProccessed?(
    <h3 className='text-purple-600 mt-4 text-4xl text-center'>Total Scraped: <span className="text-purple-600 font-bold font-serif">{procc}</span></h3>
  ):null;
};

export default TotalAmount;
