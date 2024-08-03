import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'

export type ButtonStyleProps = {
  type: 'solid' | 'outline';
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.8,
}))<ButtonStyleProps>`
  padding: 16px 24px;

  background-color: ${({ theme, type, isActive }) => {
    if (isActive) {
      if (type === 'solid') {
        return theme.COLORS.GRAY_200
      } else {
        return theme.COLORS.GRAY_500
      }
    }

    if (type === 'solid') {
      return theme.COLORS.GRAY_100
    }
  }};
  
  border-radius: 6px;
  border: ${({ theme, type }) => type === 'outline' && `solid 1px ${theme.COLORS.GRAY_100}`};
  
  flex-direction: row;
  gap: 12px;

  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled(Plus).attrs<ButtonStyleProps>(({ theme, type }) => ({
  size: 18,
  color: type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))``;

export const PencilIcon = styled(PencilSimpleLine).attrs<ButtonStyleProps>(({ theme, type }) => ({
  size: 18,
  color: type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))``;

export const TrashIcon = styled(Trash).attrs<ButtonStyleProps>(({ theme, type }) => ({
  size: 18,
  color: type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))``;

export const Title = styled(Text)<ButtonStyleProps>`
  ${({ theme, type }) => css`
    color: ${type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.TITLE_XS * 1.3}px; /* 130% */
  `}
`;