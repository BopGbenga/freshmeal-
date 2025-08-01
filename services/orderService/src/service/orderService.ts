import { orderRepostiory } from "../database/repository/orderRepository";
import { APIError } from "../utils/appError";

export class orderService {
  private repo = new orderRepostiory();

  async createOrder(data: {
    customerId: number;
    address: string;
    quantity: number;
    mealkitId: number;
    totalPrice: number;
    price: number;
  }) {
    return this.repo.createOrder(data);
  }
  async getAllOrder() {
    try {
      return this.repo.findAll();
    } catch (error) {
      throw new APIError("Data not found");
    }
  }
  async getOrder(id: number) {
    try {
      return this.repo.findById(id);
    } catch (error) {
      throw new APIError("Data not found");
    }
  }
  async updateOrder(id: number, status: string) {
    try {
      return this.repo.updateStatus(id, status);
    } catch (error) {
      throw new APIError("Data not found");
    }
  }
  async deleteOrder(id: number) {
    try {
      return this.repo.deleteOrder(id);
    } catch (error) {
      throw new APIError("Data not found");
    }
  }
}
