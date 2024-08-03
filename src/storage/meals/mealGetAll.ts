import { MealDTO } from "@/dtos/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
  
    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    meals.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  
    return meals;
  } catch (error) {
    throw error;
  }
}