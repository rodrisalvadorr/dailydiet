import { useTheme } from 'styled-components/native';
import {
	Container,
	GoBackButton,
	HeaderBackgroundColorProps,
	Title,
} from './styles';

import { ArrowLeft } from 'phosphor-react-native';
import { ViewProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = ViewProps & {
	title: string;
	backgroundColor?: HeaderBackgroundColorProps;
};

export function Header({ title, backgroundColor, style }: Props) {
	const { COLORS } = useTheme();
	const navigator = useNavigation();

	return (
		<Container
			backgroundColor={backgroundColor}
			style={style}
		>
			<GoBackButton onPress={() => navigator.goBack()}>
				<ArrowLeft
					size={24}
					color={COLORS.GRAY_200}
				/>
			</GoBackButton>

			<Title>{title}</Title>
		</Container>
	);
}
