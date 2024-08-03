import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;

  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-top: 104px;
  padding: 40px;
`;

export const Form = styled.View`
  gap: 24px;

  margin-bottom: 108px;
`;

export const DateAndHourWrapper = styled.View`
  flex-direction: row;

  gap: 20px;
`;

export const DateTimeSelect = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.5
}))`
  border: solid 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  gap: 8px;

  padding: 14px;
`;

export const DateTimeSelectLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px; /* 130% */
  `}
`;

/* Modal */

type ModalStyleProps = {
  isOnDiet: boolean; 
}

export const ModalView = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.View`
  gap: 8px;

  width: 311px;
  align-items: center;
`;

export const ModalTitle = styled.Text<ModalStyleProps>`
  ${({ theme, isOnDiet }) => css`
    color: ${isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.TITLE_M * 1.3}px; /* 130% */
  `}
`;

export const ModalSubtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px; /* 130% */
  `}
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px; /* 130% */
  `}
`;

export const ModalImage = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;

  height: 288px;
  width: 224px;
`;
