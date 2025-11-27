export interface LongTermPlan {
  id: string;
  mentorId: string;
  menteeId: string;
  durationMonths: number;
  monthlyPrice: number;

  startDate: Date;
  endDate: Date;

  status: "ACTIVE" | "PAUSED" | "COMPLETED";
}
