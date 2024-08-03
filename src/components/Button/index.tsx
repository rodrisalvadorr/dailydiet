import { TouchableOpacityProps } from 'react-native';
import {
	ButtonStyleProps,
	Container,
	PencilIcon,
	PlusIcon,
	Title,
	TrashIcon,
} from './styles';

type Props = TouchableOpacityProps &
	ButtonStyleProps & {
		icon?: 'plus' | 'pencil' | 'trash';
		title?: string;
	};

export function Button({
	icon,
	title,
	isActive = false,
	type,
	...rest
}: Props) {
	const Icon = ({ type }: ButtonStyleProps) => {
		if (icon === 'plus') return <PlusIcon type={type} />;

		if (icon === 'pencil') return <PencilIcon type={type} />;

		if (icon === 'trash') return <TrashIcon type={type} />;
	};

	return (
		<Container
			type={type}
			isActive={isActive}
			{...rest}
		>
			<Icon type={type} />
			<Title type={type}>{title}</Title>
		</Container>
	);
}
