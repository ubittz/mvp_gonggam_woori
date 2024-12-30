import styled from 'styled-components';

import { arrowLeftIcon } from '@@assets/icons';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import PurchaseContent from '@@pages/Purchase/parts/PurchaseContent';

const StyledPurchaseContainer = styled(Flex.Vertical)`
  width: 100%;
  height: 100%;
  padding: 0 238px;
`;

const ContainerHeader = styled(Flex.Horizontal)`
  width: 100%;
  height: 56px;
  color: ${COLORS.GRAY_SCALE_800};
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${COLORS.MAIN_200};

  .button_left {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 238px;
  }
`;

interface PurchaseContainerProps {
  title: string;
  onBack?: () => void;
}

function PurchaseContainer({ title, onBack }: PurchaseContainerProps) {
  return (
    <StyledPurchaseContainer className='purchase_container'>
      <ContainerHeader className='container_header'>
        <img src={arrowLeftIcon} alt='arrow_left' onClick={onBack} className='button_left' />
        <Typography.Subtitle2>{title}</Typography.Subtitle2>
      </ContainerHeader>
      <PurchaseContent />
    </StyledPurchaseContainer>
  );
}

export default PurchaseContainer;
