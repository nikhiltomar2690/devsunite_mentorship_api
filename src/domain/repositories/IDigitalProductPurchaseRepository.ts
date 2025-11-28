import { DigitalProductPurchase } from "../entities/DigitalProductPurchase";

export interface IDigitalProductPurchaseRepository {
  create(
    data: Omit<DigitalProductPurchase, "id" | "createdAt">
  ): Promise<DigitalProductPurchase>;

  findById(id: string): Promise<DigitalProductPurchase | null>;
  findByMentee(menteeId: string): Promise<DigitalProductPurchase[]>;
  findByProduct(productId: string): Promise<DigitalProductPurchase[]>;
}
