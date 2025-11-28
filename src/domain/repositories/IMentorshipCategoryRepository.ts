import { MentorshipCategory } from "../entities/Mentorship";

export interface IMentorshipCategoryRepository {
  create(data: Omit<MentorshipCategory, "id">): Promise<MentorshipCategory>;
  findById(id: string): Promise<MentorshipCategory | null>;
  findAllActive(): Promise<MentorshipCategory[]>;
  update(
    id: string,
    data: Partial<MentorshipCategory>
  ): Promise<MentorshipCategory>;
}
