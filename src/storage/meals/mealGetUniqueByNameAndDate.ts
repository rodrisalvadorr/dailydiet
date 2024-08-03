import { mealGetAll } from "./mealGetAll";

export async function mealGetUniqueByNameAndDate(name: string, date: Date) {
  try {
    const storedMeals = await mealGetAll();

    const existentMeal = storedMeals.filter((storedMeal) => (
      storedMeal.name === name &&
      new Date(storedMeal.createdAt).getTime() === new Date(date).getTime()
    ))

    return existentMeal
  } catch (error) {
    throw error;
  }
}