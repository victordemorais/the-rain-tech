import styled from 'styled-components';
import BannerMoney from 'assets/images/banner-money.png';

export const Wrapper = styled.div`
  margin-top: 80px;
  background: url(${BannerMoney}) no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 300px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WrapperText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  padding: 30px;
  max-width: 600px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;
