import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

export class UserService {
  constructor(private readonly userRepo: IUserRepository) {}

  async register(data: Omit<User, "id" | "createdAt" | "updatedAt">) {
    const existing = await this.userRepo.findByEmail(data.email);
    if (existing) throw new Error("Email already registered");

    return this.userRepo.create(data);
  }

  async getById(id: string) {
    const user = await this.userRepo.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  async update(id: string, data: Partial<User>) {
    return this.userRepo.update(id, data);
  }
}
