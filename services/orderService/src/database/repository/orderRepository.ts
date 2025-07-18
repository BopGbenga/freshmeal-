import { AppDataSource } from "../../datasource";
import { order } from "../entities/orderEntity";
import { v4 as uuidv4 } from "uuid";

export class orderRepostiory {
  private repo = AppDataSource.getRepository(order);

  async findAll(): Promise<order[]> {
    return this.repo.find();
  }
  async findById(id: number): Promise<order | null> {
    return this.repo.findOneBy({ id });
  }

  async createOrder(data: {
    id: number;
    customerId: number;
    address: string;
    quantity: number;
    totalPrice: number;
    mealkitId: number;
  }): Promise<order> {
    const order = this.repo.create({
      status: "pending",
      ...data,
    });
    return this.repo.save(order);
  }
  async updateStatus(id: number, status: string): Promise<order | null> {
    await this.repo.update({ id }, { status });
    return this.findById(id);
  }
}
