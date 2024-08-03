import { Container, GapProperty, Title } from './styles';
import { ReactNode } from 'react';

type Props = {
	labelText: string;
	gap?: GapProperty;
	children?: ReactNode;
};

export function Label({ labelText, gap = 4, children }: Props) {
	return (
		<Container gap={gap}>
			<Title>{labelText}</Title>
			{children}
		</Container>
	);
}
