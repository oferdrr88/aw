import { json } from "node:stream/consumers";

 const TOKEN_KEY = 'token';

export  const setToken = (token : string) =>{
    localStorage.setItem(TOKEN_KEY , token);
    
    
} 

export const getToken =() =>{
    return localStorage.getItem(TOKEN_KEY) || '';
}

export const removeToken =()=>{
    localStorage.removeItem(TOKEN_KEY)
}

export const verifyToken = (): boolean => {
    const token = getToken();
    return token.length > 0;
}

export  const rmoveAll=()=>
{
    localStorage.clear();

}

// export const getAdmin = (data:Boolean)=>{
//      return localStorage.setItem('admin',json.data)
// }