import { useState } from 'react';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Container
			isFocused={isFocused}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			{...rest}
		/>
	);
}
