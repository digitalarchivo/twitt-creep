import { cache } from "react";
import { supabase } from "../../../../supabse";

export const getTracking = cache(async () => {
    const { data, error } = await supabase
        .from("Tracking")
        .select("")
    if (error) {
        throw error;
    }
    return data;
    });

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

export const getLastLogIn = async () => {
    const { data: Lastsignin, error } = await supabase
        .from('sign')
        .select('*')
        .maybeSingle();
    if (error) {
        throw error;
    }
 
    return Lastsignin;
    };