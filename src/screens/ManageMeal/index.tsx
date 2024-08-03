import { Header } from '@/components/Header';
import {
	BoldText,
	Container,
	DateAndHourWrapper,
	DateTimeSelect,
	DateTimeSelectLabel,
	Form,
	ModalImage,
	ModalSubtitle,
	ModalText,
	ModalTitle,
	ModalView,
} from './styles';
import { Label } from '@/components/Label';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { mealCreate } from '@/storage/meals/mealCreate';
import { Alert, Modal } from 'react-native';
import { AppError } from '@/utils/AppError';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealDTO } from '@/dtos/MealDTO';
import { mealEdit } from '@/storage/meals/mealEdit';
import man from '@/assets/man.png';
import woman from '@/assets/woman.png';

type ModalModeProps = 'date' | 'time';

type RouteParams = {
	editMode: boolean;
	meal?: MealDTO;
};

export function ManageMeal() {
	const [currentMeal, setCurrentMeal] = useState<MealDTO>({} as MealDTO);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState(new Date('1970-01-01T00:00:00.000Z'));
	const [isOnDiet, setIsOnDiet] = useState(true);

	const [isEditMode, setIsEditMode] = useState(false);

	const [dateModalMode, setDateModalMode] = useState<ModalModeProps>('date');
	const [showDateModal, setShowDateModal] = useState(false);

	const [modalVisibility, setModalVisibility] = useState(false);

	const navigator = useNavigation();

	const route = useRoute();
	const routeParams = route.params as RouteParams;

	function handleDateModal(type: ModalModeProps) {
		setDateModalMode(type);
		setShowDateModal(true);
	}

	async function handleCreateEditMeal() {
		if (!name.trim()) {
			return Alert.alert(
				'Erro ao criar/editar refeição',
				'O nome não pode estar vazio.'
			);
		}

		try {
			if (isEditMode) {
				await mealEdit(currentMeal.id, {
					id: currentMeal.id,
					name,
					description,
					createdAt: date,
					isOnDiet,
				});

				navigator.navigate('home');
			} else {
				await mealCreate({
					id: `${name}-${new Date()}`,
					name,
					description,
					createdAt: date,
					isOnDiet,
				});

				setModalVisibility(true);
			}
		} catch (error) {
			if (error instanceof AppError) {
				return Alert.alert('Erro ao criar refeição', error.message);
			}

			Alert.alert('Erro ao criar refeição', 'Tente novamente mais tarde');
			console.log(error);
		}
	}

	function handleFetchMeal() {
		if (routeParams.editMode === true && routeParams.meal) {
			setIsEditMode(true);

			const { name, description, createdAt, isOnDiet } = routeParams.meal;

			setCurrentMeal(routeParams.meal);

			setName(name);
			setDescription(description);
			setDate(new Date(createdAt));
			setIsOnDiet(isOnDiet);
		}
	}

	useEffect(() => {
		handleFetchMeal();
	}, []);

	return (
		<>
			<Header
				title={isEditMode ? 'Editar refeição' : 'Nova refeição'}
				backgroundColor='gray'
			/>
			<Container>
				<Form>
					<Label labelText='Nome'>
						<Input
							value={name}
							onChangeText={setName}
						/>
					</Label>

					<Label labelText='Descrição'>
						<Input
							value={description}
							onChangeText={setDescription}
							multiline
							numberOfLines={5}
							maxLength={200}
							style={{ textAlignVertical: 'top' }}
						/>
					</Label>

					<DateAndHourWrapper>
						<Label labelText='Data'>
							<DateTimeSelect onPress={() => handleDateModal('date')}>
								<DateTimeSelectLabel>
									{format(date, 'P', { locale: ptBR })}
								</DateTimeSelectLabel>
							</DateTimeSelect>
						</Label>

						<Label labelText='Hora'>
							<DateTimeSelect onPress={() => handleDateModal('time')}>
								<DateTimeSelectLabel>
									{format(date, 'p', { locale: ptBR })}
								</DateTimeSelectLabel>
							</DateTimeSelect>
						</Label>
					</DateAndHourWrapper>

					{showDateModal && (
						<DateTimePicker
							value={date}
							mode={dateModalMode}
							onChange={(_, date) => {
								setShowDateModal(false);
								date ? setDate(date) : '';
							}}
						/>
					)}

					<Label
						labelText='Está dentro da dieta?'
						gap={8}
					>
						<Select
							yesSelected={isOnDiet}
							onSelectionChange={setIsOnDiet}
						/>
					</Label>
				</Form>
				<Button
					title={isEditMode ? 'Salvar alterações' : 'Cadastrar refeição'}
					type='solid'
					isActive
					onPress={handleCreateEditMeal}
				/>
			</Container>

			<Modal
				visible={modalVisibility}
				animationType='fade'
				statusBarTranslucent
			>
				<ModalView>
					<ModalText>
						<ModalTitle isOnDiet={isOnDiet}>
							{isOnDiet ? 'Continue assim!' : 'Que pena!'}
						</ModalTitle>

						{isOnDiet ? (
							<ModalSubtitle>
								Você continua <BoldText>dentro da dieta</BoldText>. Muito bem!
							</ModalSubtitle>
						) : (
							<ModalSubtitle>
								Você <BoldText>saiu da dieta</BoldText> dessa vez, mas continue
								se esforçando e não desista!
							</ModalSubtitle>
						)}
					</ModalText>

					<ModalImage source={isOnDiet ? woman : man} />

					<Button
						type='solid'
						isActive
						title='Ir para a página inicial'
						onPress={() => navigator.navigate('home')}
					/>
				</ModalView>
			</Modal>
		</>
	);
}
