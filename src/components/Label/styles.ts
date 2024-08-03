import styled, { css } from 'styled-components/native';

export type GapProperty = number;

type StyleProps = {
  gap: GapProperty;
}

export const Container = styled.View<StyleProps>`
  min-height: 70px;

  gap: ${({ gap }) => gap}px;

  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.TITLE_XS * 1.3}px; /* 130% */
  `}
`;