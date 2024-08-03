import { mealGetAll } from "./mealGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";

export async function mealDelete(deletedMealId: string) {
  try {
    const storedMeals = await mealGetAll();

    const storedMealsWithoutDeletedMeal = storedMeals.filter((storedMeal) => storedMeal.id !== deletedMealId)
    
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMealsWithoutDeletedMeal))
  } catch (error) {
    throw error;
  }
}