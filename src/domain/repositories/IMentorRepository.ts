import {Mentor} from "../entities/Mentor";

export interface IMentorRepository {
    create(data: Omit<Mentor, "id" | "createdAt" | "updatedAt">) : Promise<Mentor>;
    findById(id : string) : Promise<Mentor | null>;
    findByUserId(userId : string) : Promise<Mentor | null>;
    update(id:string,data:Partial<Mentor>) : Promise<Mentor>;
    listAllApproved() : Promise<Mentor[]>;
}