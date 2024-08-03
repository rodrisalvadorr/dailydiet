import styled, { css } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";

export type HeaderBackgroundColorProps = 'gray' | 'red' | 'green'

type Props = {
  backgroundColor?: HeaderBackgroundColorProps
}

export const Container = styled(View)<Props>`
  position: absolute;

  flex-direction: row;
  
  width: 100%;
  height: 132px;

  background-color: ${({ theme, backgroundColor }) => {
    if (backgroundColor === 'red') {
      return theme.COLORS.RED_LIGHT
    }

    if (backgroundColor === 'green') {
      return theme.COLORS.GREEN_LIGHT
    }

    return theme.COLORS.GRAY_500
  }};

  align-items: center;
  justify-content: center;

  padding: 0 24px;
`;

export const GoBackButton = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.7,
}))`
  position: absolute;

  left: 24px;

  height: 24px;
  width: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.TITLE_S * 1.3}px; /* 130% */
  `}
`;