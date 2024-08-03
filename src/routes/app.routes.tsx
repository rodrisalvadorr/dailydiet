import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@/screens/Home';
import { ManageMeal } from '@/screens/ManageMeal';
import { EditMeal } from '@/screens/EditMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen
				name='home'
				component={Home}
			/>

			<Screen
				name='editMeal'
				component={EditMeal}
			/>

			<Screen
				name='manageMeal'
				component={ManageMeal}
			/>
		</Navigator>
	);
}
