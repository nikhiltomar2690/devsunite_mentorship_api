export interface User {
    id : string;
    name : string;
    email : string;
    role : "MENTEE" | "MENTOR" | "ADMIN";
    isVerified : boolean;
    createdAt : Date;
    updatedAt : Date;
}