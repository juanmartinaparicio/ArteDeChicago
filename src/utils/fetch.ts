import { api } from '../services/api';

const API_URL = api;

export default async(urlParams?:string)=>{
    try {
        const response = await fetch(
            `${API_URL}${
                typeof urlParams !== 'undefined' && urlParams?.length > 0
                ? urlParams
                : ''}`);
        const data  = await response.json();
        return Promise.resolve(data);
    } catch (error){
        return Promise.reject(error);
    }
};
