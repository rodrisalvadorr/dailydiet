import { MealDTO } from "@/dtos/MealDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      editMeal: MealDTO;
      manageMeal: {
        editMode: boolean,
        meal?: MealDTO
      };
    }
  }
}