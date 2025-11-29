import { IDigitalProductRepository } from "../../domain/repositories/IDigitalProductRepository";
import { DigitalProduct } from "../../domain/entities/DigitalProduct";

export class DigitalProductService {
  constructor(private readonly productRepo: IDigitalProductRepository) {}

  async create(
    data: Omit<DigitalProduct, "id" | "createdAt" | "downloads" | "rating">
  ) {
    return this.productRepo.create({ ...data, downloads: 0, rating: 0 });
  }

  async update(id: string, data: Partial<DigitalProduct>) {
    return this.productRepo.update(id, data);
  }

  async getById(id: string) {
    const product = await this.productRepo.findById(id);
    if (!product) throw new Error("Product not found.");
    return product;
  }

  async listByMentor(mentorId: string) {
    return this.productRepo.findByMentor(mentorId);
  }
}
