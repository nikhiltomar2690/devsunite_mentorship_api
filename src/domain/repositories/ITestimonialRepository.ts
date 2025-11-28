import { Testimonial } from "../entities/Testimonial";

export interface ITestimonialRepository {
  create(data: Omit<Testimonial, "id" | "createdAt">): Promise<Testimonial>;
  findById(id: string): Promise<Testimonial | null>;
  findByMentor(mentorId: string): Promise<Testimonial[]>;
}
