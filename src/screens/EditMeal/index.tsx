import { Header } from '@/components/Header';
import {
	ButtonWrapper,
	Container,
	DateTitle,
	DeletionModal,
	Description,
	Info,
	InfoItem,
	ModalButtonsWrapper,
	ModalText,
	ModalWindow,
	Name,
	Status,
	Tag,
	TagText,
} from './styles';
import { useCallback, useState } from 'react';
import {
	useFocusEffect,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import { MealDTO } from '@/dtos/MealDTO';
import { Button } from '@/components/Button';
import { Modal } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { mealDelete } from '@/storage/meals/mealDelete';

export function EditMeal() {
	const [meal, setMeal] = useState<MealDTO>({} as MealDTO);
	const [date, setDate] = useState(new Date());

	const [deletionModal, setDeletionModal] = useState(false);

	const route = useRoute();
	const routeMeal = route.params as MealDTO;

	const navigator = useNavigation();

	function handleFetchMeal() {
		const { id, name, description, createdAt, isOnDiet } = routeMeal;

		setMeal({
			id,
			name,
			description,
			createdAt,
			isOnDiet,
		});

		setDate(new Date(createdAt));
	}

	function handleEditMeal(meal: MealDTO) {
		navigator.navigate('manageMeal', {
			editMode: true,
			meal,
		});
	}

	async function handleDeleteMeal() {
		await mealDelete(meal.id);

		navigator.navigate('home');
	}

	useFocusEffect(
		useCallback(() => {
			handleFetchMeal();
		}, [])
	);

	return (
		<>
			<Header
				title='Refeição'
				backgroundColor={meal.isOnDiet ? 'green' : 'red'}
			/>
			<Container>
				<Info>
					<InfoItem>
						<Name>{meal.name}</Name>
						<Description>{meal.description}</Description>
					</InfoItem>

					<InfoItem>
						<DateTitle>Data e hora</DateTitle>
						<Description>
							{format(date, `P 'às' p`, {
								locale: ptBR,
							})}
						</Description>
					</InfoItem>

					<Tag>
						<Status status={meal.isOnDiet ? 'green' : 'red'} />
						<TagText>
							{meal.isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
						</TagText>
					</Tag>
				</Info>

				<ButtonWrapper>
					<Button
						type='solid'
						icon='pencil'
						isActive
						title='Editar refeição'
						onPress={() => handleEditMeal(meal)}
					/>

					<Button
						type='outline'
						icon='trash'
						title='Excluir refeição'
						onPress={() => setDeletionModal(true)}
					/>
				</ButtonWrapper>
			</Container>

			<Modal
				visible={deletionModal}
				animationType='fade'
				transparent
				onRequestClose={() => setDeletionModal(false)}
			>
				<DeletionModal>
					<ModalWindow>
						<ModalText>
							Deseja realmente excluir o registro da refeição?
						</ModalText>
						<ModalButtonsWrapper>
							<Button
								type='outline'
								title='Cancelar'
								style={{ width: 135 }}
								onPress={() => setDeletionModal(false)}
							/>
							<Button
								type='solid'
								title='Sim, excluir'
								style={{ width: 135 }}
								onPress={handleDeleteMeal}
							/>
						</ModalButtonsWrapper>
					</ModalWindow>
				</DeletionModal>
			</Modal>
		</>
	);
}
