export interface UserCard{
    
    _id?: string
    image?: {url:string,alt:string};
    title: string;
    subTitle: string;
    phone: string;
    address: string;
    description:string
    user_id?: string
    bizNumber?: string
    url?: string
    
createdAt?:Date
}