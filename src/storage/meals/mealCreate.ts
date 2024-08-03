import { MealDTO } from "@/dtos/MealDTO";
import { mealGetAll } from "./mealGetAll";
import { AppError } from "@/utils/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealGetUniqueByNameAndDate } from "./mealGetUniqueByNameAndDate";

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedMeals = await mealGetAll();
  
    const existentMeal = await mealGetUniqueByNameAndDate(newMeal.name, newMeal.createdAt);
    
    if (existentMeal.length > 0) {
      throw new AppError('Já existe uma refeição com esse nome e data.');
    }
    
    const updatedStorage = JSON.stringify([newMeal, ...storedMeals]);
  
    await AsyncStorage.setItem(MEAL_COLLECTION, updatedStorage);
  } catch (error) {
    throw error;
  }
}