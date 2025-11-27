export interface ShortTermSession {
  id: string;
  menteeId: string;
  mentorId: string;
  categoryId: string;
  sessionDate: Date;
  startTime: string;
  endTime: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  paymentId: string;
  createdAt: Date;
}
