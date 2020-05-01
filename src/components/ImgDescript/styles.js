import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Spacing = styled.div`
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 60px;
  object-fit: contain;
`;

export const Centralize = styled.div`
  text-align: center;
`;
