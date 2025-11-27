export interface DigitalProductPurchase {
  id: string;
  productId: string;
  menteeId: string;

  paymentId: string;

  createdAt: Date;
}
