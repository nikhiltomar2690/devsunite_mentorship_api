export interface Mentor {
  id: string;
  userId: string;

  //Step 1 : Basic Info
  fullName: string;
  currentCompany: string;
  experienceYears: number;
  areasOfExpertise: string[];
  socialLinks: string[];
  portfolioUrl: string;
  resumeUrl: string;

  // Step 2 : Mentorship Type
  mentorshipTypes: ("SHORT TERM" | "LONG TERM")[];

  // Step 3 : Availability
  availabilty: ("MORNING" | "AFTERNOON" | "EVENING")[];

  // Review Flow
  status: "PENDING" | "APPROVED" | "REJECTED";
  adminMessage?: string | null;

  // Referral Logic
  referralCode: string;
  referredByMentorId?: string | null;

  createdAt: Date;
  updatedAt: Date;
}
