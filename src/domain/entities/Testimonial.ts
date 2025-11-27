export interface Testimonial {
  id: string;
  mentorId: string;
  menteeId: string;
  rating: number; // out of 5
  feedback: string;
  createdAt: Date;
}
