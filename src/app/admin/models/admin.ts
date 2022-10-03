export interface Admin {
    id:number;
    is_deleted:boolean;
    createdAt:Date;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    faculty:string;
    department:string;
    contact_no:number;
}