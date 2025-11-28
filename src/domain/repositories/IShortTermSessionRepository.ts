import { ShortTermSession } from "../entities/ShortTermSession";

export interface IShortTermSessionRepository {
  create(
    data: Omit<ShortTermSession, "id" | "createdAt">
  ): Promise<ShortTermSession>;
  findById(id: string): Promise<ShortTermSession | null>;
  findByMentee(menteeId: string): Promise<ShortTermSession[]>;
  findByMentor(mentorId: string): Promise<ShortTermSession[]>;
  update(
    id: string,
    data: Partial<ShortTermSession>
  ): Promise<ShortTermSession>;
}
