import {IDigitalProductPurchaseRepository} from "../../domain/repositories/IDigitalProductPurchaseRepository";

export class DigitalProductPurchaseService {
    constructor(private readonly purchaseRepo : IDigitalProductPurchaseRepository){}

    async purchase(data : Parameters<IDigitalProductPurchaseRepository["create"]>[0]){
        return this.purchaseRepo.create(data);
    }

    async findByMentee(menteeId: string) {
    return this.purchaseRepo.findByMentee(menteeId);
    }

    async findByProduct(productId: string) {
    return this.purchaseRepo.findByProduct(productId);
    }
}