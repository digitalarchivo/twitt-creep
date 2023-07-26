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
        .select("")
        .gte('created_at', since);
    if (error) {
        throw error;
    }
    return data;
    };
    export const getAllFollowings = async () => {
        const { data, error } = await supabase
            .from("Followed")
            .select("account,username,created_at,jk_follows,description,followed_by,updated_at")
        if (error) {
            throw error;
        }
        return data;
        };
    export const getAllFollowingsSinceFull = async () => {
        const { data, error } = await supabase
            .from("Followed")
            .select()
            .is('name', null)
        if (error) {
            throw error;
        }
        return data;
        };

export const getLastLogIn = async () => {
    const { data, error } = await supabase
        .from('sign')
        .select("last_logged_in,time_before,last_updated")
    console.log('getLastLogIn',data);
    if (error) {
        console.log('getLastLogIn error',error);
    }
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
        export const addToList = async (account:string,action:any)=>{
            const { data, error } = await supabase
            .from("Followed")
            .update([{jk_follows:action }])
            .eq('account', account)
        }
        export const addFollowing = async (account:string,username:any,description:string)=>{
            const { data, error } = await supabase
            .from("Followed")
            .insert ([{account:account,username:username, description:description, jk_follows:true, created_at:new Date() }])
        }

        export const massAdoption = async (accounts:string[],action:any)=>{
            
            const rowsToUpdate = accounts.map(account => ({
                account: account,
                jk_follows: action
            }));
            const { data, error } = await supabase
            .from("Followed")
            .upsert(rowsToUpdate);
            if (error) {
                console.error('Error performing upsert operation:', error);
              } else if(data) {
                console.log('Upsert operation successful. Affected rows:', data);
              }

        }
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
  