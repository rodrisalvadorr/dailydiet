import styled, { css } from "styled-components/native";

export type StatusColor = 'green' | 'red'

type StyleProps = {
  status: StatusColor;
}

export const Container = styled.View`
  flex: 1;

  margin-top: 104px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 20px 20px 0 0;

  padding: 40px 24px;

  justify-content: space-between;
`;

export const Info = styled.View`
  gap: 24px;
`;

export const InfoItem = styled.View`
  gap: 8px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};

    font-size: 20px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    line-height: ${20 * 1.3}px;
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    line-height: ${theme.FONT_SIZE.BODY_M * 1.3}px;
  `};
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    line-height: ${theme.FONT_SIZE.TITLE_XS * 1.3}px;
  `};
`;

export const Tag = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex-direction: row;
  gap: 8px;

  padding: 8px 16px;

  border-radius: 999px;

  justify-content: center;
  align-items: center;

  align-self: flex-start;
`;

export const Status = styled.View<StyleProps>`
  height: 8px;
  width: 8px;

  background-color: ${({ theme, status }) => status === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  border-radius: 999px;
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    line-height: ${theme.FONT_SIZE.BODY_S * 1.3}px;
  `};
`;

export const ButtonWrapper = styled.View`
  gap: 9px;
`;

/* Deletion Modal */

export const DeletionModal = styled.View`
  flex: 1;

  background: rgba(0, 0, 0, 0.25);

  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  height: 192px;
  width: 327px;

  gap: 32px;

  padding: 40px 24px 24px 24px;

  border-radius: 8px;
`;

export const ModalText = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    line-height: ${theme.FONT_SIZE.TITLE_S * 1.3}px;
  `};
`;

export const ModalButtonsWrapper = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;