import { IShortTermSessionRepository } from "../../domain/repositories/IShortTermSessionRepository";

export class ShortTermSessionService {
  constructor(private readonly sessionRepo: IShortTermSessionRepository) {}

  async book(data: Parameters<IShortTermSessionRepository["create"]>[0]) {
    return this.sessionRepo.create(data);
  }

  async update(id: string, data: any) {
    return this.sessionRepo.update(id, data);
  }

  async getById(id: string) {
    return this.sessionRepo.findById(id);
  }
}
