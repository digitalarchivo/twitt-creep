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

export const getAllFollowingsSince = cache(async (since: string) => {
    const { data, error } = await supabase
        .from("Followed")
        .select("*")
        .gte("created_at", since)
    if (error) {
        throw error;
    }
    return data;
    });

export const getLastLogIn = cache(async () => {
    const { data: Lastsignin, error } = await supabase
        .from('sign')
        .select('*')
        .maybeSingle();
    if (error) {
        throw error;
    }
 
    return Lastsignin;
    });

export const deleteTracking = async (id: string) => {
    const { data,error } = await supabase
        .from("Tracking")
        .delete()
        .match({ account: id })
    if (error) {
        return error;
    }
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