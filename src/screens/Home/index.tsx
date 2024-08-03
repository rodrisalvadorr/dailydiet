import { Alert, SectionList, View } from 'react-native';
import {
	Container,
	Header,
	InfoCard,
	InfoCardDescription,
	InfoCardIcon,
	InfoCardTitle,
	Logo,
	Meal,
	MealDietIndicator,
	MealsDay,
	MealTime,
	MealTitle,
	NewMeal,
	NewMealLabel,
	ProfilePicture,
	Separator,
	StatisticsModal,
	StatisticsBody,
	StatisticsHeader,
	ModalClose,
	StatisticsHeaderInfo,
	StatisticsHeaderTitle,
	StatisticsHeaderSubtitle,
	StatisticsBodyTitle,
	StatisticsBodyData,
	StatisticsBodyBubble,
	StatisticsBubbleTitle,
	StatisticsBubbleSubtitle,
	Gradient,
	ListEmptyText,
} from './styles';

import logo from '@/assets/logo.png';
import { Button } from '@/components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { mealGetAllSectionedByDate } from '@/storage/meals/mealGetAllSectionedByDate';
import { SectionListDTO } from '@/dtos/SectionListDTO';
import { AppError } from '@/utils/AppError';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { mealGetStatistics } from '@/storage/meals/mealGetStatistics';
import { MealDTO } from '@/dtos/MealDTO';

type MealStatistics = {
	onDietMeals: number;
	onDietPercentage: number;
	onDietPercentageString: string;
	notOnDietMeals: number;
	onDietStreak: number;
};

export function Home() {
	const [meals, setMeals] = useState<SectionListDTO[]>([]);
	const [mealStatistics, setMealStatistics] = useState<MealStatistics>({
		onDietMeals: 0,
		onDietPercentage: 0,
		onDietPercentageString: '00,00',
		notOnDietMeals: 0,
		onDietStreak: 1,
	});

	const [isModalVisible, setIsModalVisible] = useState(false);

	const navigator = useNavigation();

	const { COLORS } = useTheme();

	function handleNewMeal() {
		navigator.navigate('manageMeal', {
			editMode: false,
		});
	}

	function handleEditMeal(meal: MealDTO) {
		navigator.navigate('editMeal', meal);
	}

	async function fetchMeals() {
		try {
			const { formatedMeals } = await mealGetAllSectionedByDate();

			setMeals(formatedMeals);
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert(
					'Erro ao criar carregar as refeições',
					error.message
				);
			}

			Alert.alert('Erro ao criar refeição', 'Tente novamente mais tarde');
			console.log(error);
		}
	}

	async function fetchMealStatistics() {
		try {
			const {
				onDietMeals,
				notOnDietMeals,
				onDietPercentage,
				onDietPercentageString,
				onDietStreak,
			} = await mealGetStatistics();

			setMealStatistics({
				onDietMeals,
				onDietPercentage,
				onDietPercentageString,
				notOnDietMeals,
				onDietStreak,
			});
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Erro ao carregar as informações', error.message);
			}

			Alert.alert('Erro ao criar refeição', 'Tente novamente mais tarde');
			console.log(error);
		}
	}

	useFocusEffect(
		useCallback(() => {
			fetchMeals();
			fetchMealStatistics();
		}, [])
	);

	return (
		<>
			<Container>
				<Header>
					<Logo source={logo} />
					<ProfilePicture src='https://github.com/rodrisalvadorr.png' />
				</Header>

				<InfoCard
					isOnDietPercentage={mealStatistics.onDietPercentage}
					onPress={() => setIsModalVisible(true)}
				>
					<InfoCardIcon
						color={
							mealStatistics.onDietPercentage >= 80
								? COLORS.GREEN_DARK
								: COLORS.RED_DARK
						}
					/>

					<InfoCardTitle>{`${mealStatistics.onDietPercentageString}%`}</InfoCardTitle>
					<InfoCardDescription>
						das refeições dentro da dieta
					</InfoCardDescription>
				</InfoCard>

				<StatisticsModal
					visible={isModalVisible}
					onRequestClose={() => setIsModalVisible(false)}
				>
					<ModalClose onPress={() => setIsModalVisible(false)}>
						<ArrowLeft
							color={
								mealStatistics.onDietPercentage >= 80
									? COLORS.GREEN_DARK
									: COLORS.RED_DARK
							}
							size={24}
						/>
					</ModalClose>

					<StatisticsHeader
						isOnDietPercentage={mealStatistics.onDietPercentage}
					>
						<StatisticsHeaderInfo>
							<StatisticsHeaderTitle>{`${mealStatistics.onDietPercentageString}%`}</StatisticsHeaderTitle>
							<StatisticsHeaderSubtitle>
								das refeições dentro da dieta
							</StatisticsHeaderSubtitle>
						</StatisticsHeaderInfo>
					</StatisticsHeader>

					<StatisticsBody>
						<StatisticsBodyTitle>Estatísticas gerais</StatisticsBodyTitle>

						<StatisticsBodyData>
							<StatisticsBodyBubble backgroundColor='default'>
								<StatisticsBubbleTitle>
									{mealStatistics.onDietStreak}
								</StatisticsBubbleTitle>
								<StatisticsBubbleSubtitle>
									melhor sequência de pratos dentro da dieta
								</StatisticsBubbleSubtitle>
							</StatisticsBodyBubble>

							<StatisticsBodyBubble backgroundColor='default'>
								<StatisticsBubbleTitle>
									{mealStatistics.onDietMeals + mealStatistics.notOnDietMeals}
								</StatisticsBubbleTitle>
								<StatisticsBubbleSubtitle>
									refeições registradas
								</StatisticsBubbleSubtitle>
							</StatisticsBodyBubble>

							<View style={{ flexDirection: 'row', gap: 12 }}>
								<StatisticsBodyBubble
									backgroundColor='success'
									style={{ flex: 1 }}
								>
									<StatisticsBubbleTitle>
										{mealStatistics.onDietMeals}
									</StatisticsBubbleTitle>
									<StatisticsBubbleSubtitle>
										refeições dentro da dieta
									</StatisticsBubbleSubtitle>
								</StatisticsBodyBubble>

								<StatisticsBodyBubble
									backgroundColor='fail'
									style={{ flex: 1 }}
								>
									<StatisticsBubbleTitle>
										{mealStatistics.notOnDietMeals}
									</StatisticsBubbleTitle>
									<StatisticsBubbleSubtitle>
										refeições fora da dieta
									</StatisticsBubbleSubtitle>
								</StatisticsBodyBubble>
							</View>
						</StatisticsBodyData>
					</StatisticsBody>
				</StatisticsModal>

				<SectionList
					sections={meals}
					keyExtractor={item => item.id}
					ListHeaderComponent={() => (
						<NewMeal>
							<NewMealLabel>Refeições</NewMealLabel>
							<Button
								icon='plus'
								type='solid'
								isActive
								title='Nova refeição'
								onPress={handleNewMeal}
							/>
						</NewMeal>
					)}
					renderSectionHeader={({ section }) => (
						<MealsDay>{format(section.date, 'dd.MM.yy')}</MealsDay>
					)}
					renderItem={({ item }) => (
						<Meal onPress={() => handleEditMeal(item)}>
							<MealTime>
								{format(item.createdAt, 'p', { locale: ptBR })}
							</MealTime>
							<Separator />
							<MealTitle>{item.name}</MealTitle>
							<MealDietIndicator isOnDiet={item.isOnDiet} />
						</Meal>
					)}
					ListEmptyComponent={() => (
						<View
							style={{
								justifyContent: 'center',
							}}
						>
							<ListEmptyText>
								Não há nenhuma refeição registrada. Que tal registrar a primeira
								a refeição?
							</ListEmptyText>
						</View>
					)}
					ListFooterComponent={() => <View style={{ height: 160 }} />}
					showsVerticalScrollIndicator={false}
				/>
			</Container>

			<View pointerEvents='none'>
				<Gradient />
			</View>
		</>
	);
}
