import { mealGetAll } from "./mealGetAll";

export async function mealGetStatistics() {
  const storedMeals = await mealGetAll();

  const onDietMeals = storedMeals.filter((item) => item.isOnDiet === true).length
  const notOnDietMeals = storedMeals.length - onDietMeals;

  const onDietPercentage = (
    (storedMeals.filter(item => item.isOnDiet === true).length / storedMeals.length) * 100
  )

  const onDietPercentageString = !Number.isNaN(onDietPercentage) ? onDietPercentage.toFixed(2).replace('.', ',') : '00,00';

  const onDietStreak = storedMeals.reduce((acc, item) => {
    let currentStreak = 0;
    
    if (item.isOnDiet === true) {
      acc += 1;
    } else {
      acc = 0
    }

    if (acc > currentStreak) {
      currentStreak = acc
    }

    return currentStreak
  }, 0)

  return {
    onDietMeals,
    notOnDietMeals,
    onDietPercentage,
    onDietPercentageString,
    onDietStreak,
  }
}