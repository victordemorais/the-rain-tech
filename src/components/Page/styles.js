import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => `
    ${props.backgroundColor && `background-color:${props.backgroundColor};`}
  `}
  width: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
