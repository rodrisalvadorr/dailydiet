import { MealDTO } from "@/dtos/MealDTO";
import { mealGetAll } from "./mealGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealGetUniqueByNameAndDate } from "./mealGetUniqueByNameAndDate";
import { AppError } from "@/utils/AppError";

export async function mealEdit(currentMealId: string, updatedMeal: MealDTO) {
  try {
    const storedMeals = await mealGetAll();
    const existentMeal = await mealGetUniqueByNameAndDate(updatedMeal.name, updatedMeal.createdAt);

    if (existentMeal.length > 0 && existentMeal[0].id !== currentMealId) {
      throw new AppError('Já existe uma refeição com esse nome e data.')
    }

    const storedMealsWithoutOldMeal = storedMeals.filter(storedMeal => storedMeal.id !== currentMealId)
    
    const updatedMeals = [updatedMeal, ...storedMealsWithoutOldMeal]
    
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals))
  } catch (error) {
    throw error;
  }
}