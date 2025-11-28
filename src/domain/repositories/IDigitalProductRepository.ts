import { DigitalProduct } from "../entities/DigitalProduct";

export interface IDigitalProductRepository {
  create(
    data: Omit<DigitalProduct, "id" | "createdAt">
  ): Promise<DigitalProduct>;
  findById(id: string): Promise<DigitalProduct | null>;
  findByMentor(mentorId: string): Promise<DigitalProduct[]>;
  update(id: string, data: Partial<DigitalProduct>): Promise<DigitalProduct>;
}
