import { useEffect, useState } from 'react';
import {
	Container,
	Label,
	NoIndicator,
	SelectNoOption,
	SelectYesOption,
	YesIndicator,
} from './styles';

type Props = {
	yesSelected: boolean;
	onSelectionChange: (value: boolean) => void;
};

export function Select({ yesSelected, onSelectionChange }: Props) {
	const [isYesSelected, setIsYesSelected] = useState(yesSelected);

	useEffect(() => {
		setIsYesSelected(yesSelected);
	}, [yesSelected]);

	function handleSelection(value: boolean) {
		setIsYesSelected(value);
		onSelectionChange(value);
	}

	return (
		<Container>
			<SelectYesOption
				onPress={() => handleSelection(true)}
				isFocused={isYesSelected}
			>
				<YesIndicator />
				<Label>Sim</Label>
			</SelectYesOption>

			<SelectNoOption
				onPress={() => handleSelection(false)}
				isFocused={!isYesSelected}
			>
				<NoIndicator />
				<Label>Não</Label>
			</SelectNoOption>
		</Container>
	);
}
