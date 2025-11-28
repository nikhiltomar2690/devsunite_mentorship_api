import {Payment} from "../entities/Payment";

export interface IPaymentRepository{
    create(data: Omit<Payment,"id"|"createdAt">) : Promise<Payment>;
    findById(id:string) : Promise<Payment | null>;
    findByUserId(userId:string) : Promise<Payment[]>;
    update(id:string,data:Partial<Payment>) : Promise<Payment>;
}