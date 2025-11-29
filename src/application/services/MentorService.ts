import { IMentorRepository } from "../../domain/repositories/IMentorRepository";
import { Mentor } from "../../domain/entities/Mentor";

export class MentorService{
    constructor(private readonly mentorRepo : IMentorRepository) {}

    async create(data:Omit<Mentor,"id"|"createdAt"|"updatedAt">){
        return this.mentorRepo.create(data);
    }

    async getById(id:string){
        const mentor = await this.mentorRepo.findById(id);
        if(!mentor) throw new Error("Mentor not found");
        
        return mentor;
    }

    async approveMentor(id:string,adminMessage?:string){
        return this.mentorRepo.update(id,{status:"APPROVED",adminMessage});
    }

    async rejectMentor(id:string,adminMessage?:string){
        return this.mentorRepo.update(id,{status:"REJECTED",adminMessage});
    }

    async listAllApproved(){
        return this.mentorRepo.listAllApproved();
    }
}