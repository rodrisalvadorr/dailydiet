import { Image, Modal, TouchableOpacity, View } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import gradient from '@/assets/gradient.png'

import styled, { css } from 'styled-components/native';

type StyleProps = {
  isOnDietPercentage: number;
}

// Main Component

export const Container = styled(View)`
  flex: 1;

  padding: 64px 24px 0 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  height: 37px;
  width: 82px;
`;

export const ProfilePicture = styled.Image`
  height: 40px;
  width: 40px;

  border: solid 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 20px;
`;

export const InfoCard = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.5,
}))<StyleProps>`
  width: 100%;

  padding: 20px 16px;

  justify-content: center;
  align-items: center;

  gap: 2px;

  border-radius: 8px;

  ${({ theme, isOnDietPercentage }) => css`
    background-color: ${isOnDietPercentage >= 80 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `}

  margin-bottom: 40px;
`;

export const InfoCardTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.TITLE_G * 1.3}px; /* 130% */
  `}
`;

export const InfoCardDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    line-height: ${theme.FONT_SIZE.BODY_S * 1.3}px; /* 130% */
  `}
`;

export const InfoCardIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const NewMeal = styled.View`
  gap: 8px;
`;

export const NewMealLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px; /* 130% */
  `}
`;

export const MealsDay = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.TITLE_S * 1.3}px; /* 130% */
  `}

  margin-top: 32px;
`;

export const Meal = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 100%;

  flex-direction: row;
  align-items: center;

  gap: 12px;

  padding: 14px 16px 14px 12px;

  border: solid 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  margin-top: 8px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};

    line-height: ${theme.FONT_SIZE.BODY_XS * 1.3}px; /* 130% */
  `}
`;

export const Separator = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealTitle = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px; /* 130% */
  `}
`;

export const MealDietIndicator = styled(View)<{isOnDiet: boolean}>`
  width: 14px;
  height: 14px;
  
  background-color: ${({ theme, isOnDiet }) => isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

  border-radius: 7px;
`;

export const ListEmptyText = styled.Text`
  margin-top: 100px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px; /* 130% */
  `}
`;

export const Gradient = styled(Image).attrs(() => ({
  source: gradient,
}))`
  width: 100%;

  position: absolute;
  bottom: 0;
  left: 0;
`;

// Modal

export const StatisticsModal = styled(Modal).attrs({
  animationType: 'fade',
  statusBarTranslucent: true,
})``;

export const ModalClose = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.7,
}))`
  position: absolute;
  top: 56px;
  left: 24px;

  height: 24px;
  width: 24px;
`;

export const StatisticsHeader = styled.View<StyleProps>`
  position: absolute;
  top: 0;
  left: 0;

  background-color: ${({ theme, isOnDietPercentage }) => isOnDietPercentage >= 80 ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};

  z-index: -1;

  height: 200px;
  width: 100%;

  padding: 0 24px;
`;

export const StatisticsHeaderInfo = styled.View`
  align-items: center;

  margin-top: 72px;

  gap: 2px;
`;

export const StatisticsHeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    line-height: ${theme.FONT_SIZE.TITLE_G * 1.3}px;
  `};
`;

export const StatisticsHeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    line-height: ${theme.FONT_SIZE.BODY_S * 1.3}px;
  `};
`;

export const StatisticsBody = styled.View`
  flex: 1;

  margin-top: 168px;
  padding: 33px 24px 0;

  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  gap: 23px;
`;

export const StatisticsBodyTitle = styled.Text`
  align-self: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    line-height: ${theme.FONT_SIZE.TITLE_XS * 1.3}px;
  `};
`;

export const StatisticsBodyData = styled.View`
  gap: 12px;
`;

type StatisticsBodyBubbleProps = {
  backgroundColor: 'default' | 'success' | 'fail'
} 

export const StatisticsBodyBubble = styled(View)<StatisticsBodyBubbleProps>`
  padding: 16px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;

  gap: 8px;

  background-color: ${({ theme, backgroundColor }) => 
    backgroundColor === 'default' ? theme.COLORS.GRAY_600 : 
    backgroundColor === 'success' ? theme.COLORS.GREEN_LIGHT : 
    theme.COLORS.RED_LIGHT
  };
`;

export const StatisticsBubbleTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    line-height: ${theme.FONT_SIZE.TITLE_M * 1.3}px;
  `};
`;

export const StatisticsBubbleSubtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    line-height: ${theme.FONT_SIZE.BODY_S * 1.3}px;
  `};
`;