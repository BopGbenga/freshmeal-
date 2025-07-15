import { number } from "joi";
import { AppDataSource } from "../../dataSource";
import { Mealkit } from "../entities/mealkit";
import { v4 as uuidv4 } from "uuid";

export class mealkitRepository {
  private repo = AppDataSource.getRepository(Mealkit);

  async findAll(): Promise<Mealkit[]> {
    return this.repo.find();
  }

  async findbyId(id: string): Promise<Mealkit | null> {
    return this.repo.findOneBy({ id });
  }

  async createMealkit(data: {
    id: string;
    name: string;
    ingredients: string;
    instructions: string;
    price: number;
  }): Promise<Mealkit> {
    const mealkit = this.repo.create({
      ...data,
    });
    return this.repo.save(mealkit);
  }
  async updateMealkit(
    id: string,
    updateData: Partial<Mealkit>
  ): Promise<Mealkit | null> {
    await this.repo.update({ id }, updateData);
    return this.findbyId(id);
  }
  async deleteMealKit(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
