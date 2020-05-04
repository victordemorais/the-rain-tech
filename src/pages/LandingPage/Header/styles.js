import styled from 'styled-components';

export const Logo = styled.img`
  width: 288px;
  margin-left: -10px;
  @media (max-width: 768px) {
    width: 240px;
  }
`;

export const Call = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const BoxCall = styled.div`
  width: 500px;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Spacing = styled.div`
  margin-top: 10px;
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialGroupText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  width: 130px;
  margin-left: 20px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const SocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const SocialIcon = styled.img`
  width: 25px;
  @media (max-width: 768px) {
    width: 30px;
  }
`;
