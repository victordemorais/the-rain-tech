import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;
