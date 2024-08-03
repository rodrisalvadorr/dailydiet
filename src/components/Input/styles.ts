import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

type StyleProps = {
  isFocused: boolean;
}

export const Container = styled(TextInput).attrs<StyleProps>(({ theme }) => ({
  cursorColor: theme.COLORS.GRAY_100,
}))<StyleProps>`
  border: solid 1px;
  border-radius: 6px;

  gap: 8px;

  padding: 10px 14px;

  ${({ theme, isFocused }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px; /* 130% */

    border-color: ${isFocused ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
  `}
`;