import styled from 'styled-components';

export const Font = styled.span`
  font-family: 'Roboto', sans-serif;
  ${(props) => `
    ${props.regular && 'font-weight: 400'};
    ${props.bold && 'font-weight: bold'};
    ${props.light && 'font-weight: 300'};
    ${props.size && `font-size: ${props.size}px`};
    ${props.color && `color: ${props.color}`};
  `}
`;
