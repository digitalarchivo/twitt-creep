'use client'
import { getAllProccessed } from '@/components/utils/supabase';
import React, { useState, useEffect } from 'react';

// @ts-ignore
const TotalAmount = (amountProccessed ) => {


  return amountProccessed?(
    <h3 className='text-purple-400 text-2xl text-center'>Total Users Proccesed{amountProccessed}</h3>
  ):null;
};

export default TotalAmount;
