const API_URL = 'https://api.artic.edu/api/v1/artworks /6010';

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
