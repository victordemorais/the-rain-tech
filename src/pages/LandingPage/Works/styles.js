import styled from 'styled-components';
import BorderArround from 'assets/images/border.png';
import Statistics from 'assets/images/statistics.png';
import Girl from 'assets/images/girlMoney.png';
import Theme from 'styles/theme';

export const Arround = styled.div`
  margin-top: 120px;
  position: relative;
  background: ${Theme.colors.primary};
  padding: 40px 0px;
  @media (max-width: 768px) {
    margin-top: 540px;
  }
`;

export const ArroundBorder = styled.div`
  top: ${(props) => (props.bottom ? 'initial' : '-23px')};
  bottom: ${(props) => (props.bottom ? '-23px' : 'initial')};
  background: url(${BorderArround});
  background-repeat: no-repeat;
  background-size: calc(100% + 85px);
  background-position: 0 bottom;
  height: 25px;
  width: 100%;
  transform: ${(props) => (props.bottom ? '' : 'rotate(180deg)')};
  position: absolute;
  @media (max-width: 768px) {
    top: ${(props) => (props.bottom ? 'initial' : '-10px')};
    bottom: ${(props) => (props.bottom ? '-10px' : 'initial')};
  }
`;

export const Wrapper = styled.div`
  display: grid;
  flex-direction: row;
  position: relative;
  justify-content: right;
  align-items: center;
`;

export const Statistcs = styled.div`
  background: url(${Statistics}) no-repeat;
  position: absolute;
  z-index: 2;
  top: -100px;
  height: 440px;
  width: 440px;
  background-size: contain;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const GirlMoney = styled.div`
  background: url(${Girl}) no-repeat;
  position: absolute;
  z-index: -1;
  top: -540px;
  height: 600px;
  width: 100%;
  background-position: right;
  background-size: contain;
  @media (max-width: 768px) {
    background-position: center;
  }
`;

export const GroupText = styled.div`
  margin-top: -20px;
  z-index: 2;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 600px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Spacing = styled.div`
  margin-top: 20px;
`;
