import { mealkitRepository } from "../database/repository/mealkit-repostory.";

import { AppError } from "../utils/appErrors";

class mealkitService {
  private repository = new mealkitRepository();

  async createMealkit(data: {
    id: string;
    name: string;
    ingredients: string;
    instructions: string;
    price: number;
  }) {
    return this.repository.createMealkit(data);
  }

  async getAllMealKit() {
    return this.repository.findAll();
  }
  async getMealKitById(id: string) {
    return this.repository.findbyId(id);
  }
  async updateMealKit(id: string, data: Partial<any>) {
    await this.repository.updateMealkit(id, data);
    return this.getMealKitById(id);
  }

  async deleteById(id: string) {
    return this.repository.deleteMealKit(id);
  }
}
