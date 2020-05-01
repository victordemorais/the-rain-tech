import styled from 'styled-components';
import GorilaImage from 'assets/images/logo-gorila.png';
import TheRainTechimage from 'assets/images/logo-the-rain-tech.png';

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;

export const WrapperCollumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.start ? 'flex-start' : 'flex-end')};
`;

export const Gorila = styled.div`
  width: 200px;
  height: 55px;
  background: url(${GorilaImage}) no-repeat;
  background-size: contain;
  bakcground-size: 200px 100px;
`;

export const TheRainTech = styled.div`
  width: 95px;
  height: 95px;
  background: url(${TheRainTechimage}) no-repeat;
  background-size: contain;
  background-position: right;
`;

export const Spacing = styled.div`
  margin-top: 10px;
`;
