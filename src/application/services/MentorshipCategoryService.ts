import { IMentorshipCategoryRepository } from "../../domain/repositories/IMentorshipCategoryRepository";

export class MentorshipCategoryService {
  constructor(private readonly categoryRepo: IMentorshipCategoryRepository) {}

  async create(data: Parameters<IMentorshipCategoryRepository["create"]>[0]) {
    return this.categoryRepo.create(data);
  }

  async update(id: string, data: any) {
    return this.categoryRepo.update(id, data);
  }

  async findAllActive() {
    return this.categoryRepo.findAllActive();
  }
}
