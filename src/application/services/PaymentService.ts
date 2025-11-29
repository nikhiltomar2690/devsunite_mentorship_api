import { IPaymentRepository } from "../../domain/repositories/IPaymentRepository";

export class PaymentService {
  constructor(private readonly paymentRepo: IPaymentRepository) {}

  async create(data: Parameters<IPaymentRepository["create"]>[0]) {
    return this.paymentRepo.create(data);
  }

  async markPaid(id: string, providerPaymentId: string) {
    return this.paymentRepo.update(id, {
      status: "PAID",
      providerPaymentId,
    });
  }
}
