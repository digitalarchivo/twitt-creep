import { cache } from "react";
import { supabase } from "../../../../supabse";

export const getTracking = async () => {
    console.log('getTracking');
    const { data, error } = await supabase
        .from("Tracking")
        .select('*')
    if (error) {
        throw error;
    }
    return data;
    };

export const getAllFollowingsSince = async (since: string) => {
    const { data, error } = await supabase
        .from("Followed")
        .select("*")
        .gte('created_at', since);
    if (error) {
        throw error;
    }
    return data;
    };
    export const getAllFollowingsSinceFull = async (since: string) => {
        const { data, error } = await supabase
            .from("Followed")
            .select("*")
            .gte('created_at', since);
        if (error) {
            throw error;
        }
        return data;
        };

export const getLastLogIn = async () => {
    const {data} = await supabase
        .from('sign')
        .select("*")
        .eq('id', 0)
 
    return data;
    };

export const deleteTracking = async (id: string) => {
    const data= await supabase
        .from("Tracking")
        .delete()
        .match({ account: id })
 
    return data;
    }

    export const addTracking = async (account: string, username: string,description:string) => {
        const { data, error } = await supabase
            .from("Tracking")
            .insert([{ account:account, username:username,description:description,created_at:new Date() }])
        if (error) {
            console.log('error',error);
            return error;
        }
        console.log('data',data);
        return data;
        };

    export const signIn = async (newDate:string) => {
        console.log('signIn for you',newDate);
        const { data, error } = await supabase
        .from("sign")
        .update([{ last_logged_in:new Date(), time_before:newDate}])
        .match({ id: 0 })
    if (error) {
        return error;
    }
    return data;
    };
  