import { ITestimonialRepository } from "../../domain/repositories/ITestimonialRepository";

export class TestimonialService {
  constructor(private readonly testimonialRepo: ITestimonialRepository) {}

  async create(
    data: Parameters<ITestimonialRepository["create"]>[0]
  ) {
    return this.testimonialRepo.create(data);
  }

  async findByMentor(mentorId: string) {
    return this.testimonialRepo.findByMentor(mentorId);
  }
}
