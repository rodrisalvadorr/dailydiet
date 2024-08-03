import { MealDTO } from "@/dtos/MealDTO";
import { mealGetAll } from "./mealGetAll";

type Accumulator = {
  [key: string]: {
    date: string;
    data: MealDTO[];
  };
}

export async function mealGetAllSectionedByDate() {
  try {
    const storedMeals = await mealGetAll();

    const formatedMeals = Object.values(storedMeals.reduce((acc, item) => {
      const dateKey = item.createdAt.toString().replace(/T.*/, '');

      if (!acc[dateKey]) {
        acc[dateKey] = {
          date: dateKey,
          data: []
        };
      };

      acc[dateKey].data.push(item);

      return acc;
    }, {} as Accumulator))

    return {
      formatedMeals
    }
  } catch (error) {
    throw error;
  }
}