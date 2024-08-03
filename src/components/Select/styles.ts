import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type StyleProps = {
  isFocused?: boolean;
}

export const Container = styled.View`
  flex-direction: row;

  gap: 8px;
`;

export const SelectYesOption = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9
}))<StyleProps>`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding: 16px;

  gap: 8px;

  border-radius: 6px;

  background-color: ${({ theme, isFocused }) => isFocused ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_600};

  ${({ theme, isFocused }) => css`
    border: ${isFocused ? 'solid 1px' : 0};
    border-color: ${isFocused ? theme.COLORS.GREEN_DARK : 0};
  `}
`;

export const SelectNoOption = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9
}))<StyleProps>`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding: 16px;

  gap: 8px;

  border-radius: 6px;

  background-color: ${({ theme, isFocused }) => isFocused ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600};

  ${({ theme, isFocused }) => css`
    border: ${isFocused ? 'solid 1px': 0};
    border-color: ${isFocused ? theme.COLORS.RED_DARK : 0};
  `}
`;

export const YesIndicator = styled.View`
  height: 8px;
  width: 8px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const NoIndicator = styled.View`
  height: 8px;
  width: 8px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.TITLE_XS * 1.3}px; /* 130% */
  `}
`;