import { mealkitRepository } from "../database/repository/mealkit-repostory.";
import { APIError } from "../utils/appErrors";

class mealkitService {
  private repository = new mealkitRepository();

  async createMealkit(data: {
    id: string;
    name: string;
    ingredients: string;
    instructions: string;
    price: number;
  }) {
    return await this.repository.createMealkit(data);
  }

  async getAllMealKit() {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new APIError("Data not found");
    }
  }
  async getMealKitById(id: string) {
    try {
      return await this.repository.findbyId(id);
    } catch (error) {
      throw new APIError("mealkit not found");
    }
  }
  async updateMealKit(id: string, data: Partial<any>) {
    try {
      await this.repository.updateMealkit(id, data);
      return this.getMealKitById(id);
    } catch (error) {
      throw new APIError("failed to update mealkit");
    }
  }

  async deleteById(id: string) {
    try {
      await this.repository.deleteMealKit(id);
    } catch (error) {
      throw new APIError("failed to delete mealkit");
    }
  }
}
