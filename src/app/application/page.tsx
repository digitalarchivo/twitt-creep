// src/app/page.tsx

'use client'; // Mark the page as a client component

import dynamic from 'next/dynamic';
import { getLastLogIn } from '@/components/utils/supabase';
import React, { useEffect, useState } from 'react';

const LogIn = dynamic(() => import('@/components/buttons/LogIn')); // Dynamically import LogIn component

interface Props {}

interface SignIn extends Array<{
  id: number;
  last_logged_in: string;
  new_amount: number | null;
  last_updated: string;
  time_before: string;
}> {}

export default function Page({ signIn, acct, totalAmount }: { signIn: SignIn; acct: any[], totalAmount: any[]}) {
  const [currentUserData, setCurrentUserData] = useState<any>(null);

  useEffect(() => {
    setCurrentUserData(signIn ? signIn[0]: null)
  }, []);

  const lastUpdated = new Date(currentUserData?.last_updated || '').toLocaleDateString();
  const lastCheckedIn = new Date(currentUserData?.time_before || '').toLocaleDateString();

  return (
    <Layout>
      <TwitImage />
      <h1 className="text-[5rem] my-6 text-center text-sky-600">Twit CREEP</h1>
      {/* Add your components here */}
      {!currentUserData && <p>Please login.</p>}
      {currentUserData && (
        <>
          <p>{currentUserData.id}</p>
          <p>{currentUserData.last_logged_in}</p>
          <p>{currentUserData.new_amount}</p>
          <p>{currentUserData.last_updated}</p>
          <p>{currentUserData.time_before}</p>
          <LogIn />
        </>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const signIn = await getLastLogIn();
  const acct = await getAllFollowings();
  const totalAmount = await getAllProcessed();

  return {
    props: {
      signIn,
      acct,
      totalAmount,
    },
  };
}
