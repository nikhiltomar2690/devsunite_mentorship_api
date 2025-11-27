export interface Payment {
  id: string;
  userId: string;
  amount: number;
  providerOrderId: string;
  providerPaymentId?: string;
  currency: string;

  status: "CREATED" | "PAID" | "FAILED" | "REFUNDED";

  createdAt: Date;
}
