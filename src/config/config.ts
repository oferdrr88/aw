import { getToken } from "../auth/tokenMgmt"

export const BASE_URL = "http://localhost:3355"

export function authHeaders(){
    return{
        'Content-Type': 'application/json',
        'x-auth-token' : getToken()
    }
}