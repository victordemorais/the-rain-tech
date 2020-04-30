import styled from 'styled-components';
import Theme from 'styles/theme';

export const ButtonPrimary = styled.input.attrs((props) => ({
  type: 'button',
  value: props.value,
  onclick: props.onclick,
}))`
  width: 100%;
  background: ${Theme.colors.primary};
  color: #525865;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto', sans-serif;
  font-size: 0.875em;
  line-height: 1.45;
  outline: none;
  height: 50px;

  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out;

  ${({ textStyles }) => `
  ${textStyles.regular && 'font-weight: 400'};
  ${textStyles.bold && 'font-weight: bold'};
  ${textStyles.light && 'font-weight: 300'};
  ${textStyles.size && `font-size: ${textStyles.size}px`};
  ${textStyles.color && `color: ${textStyles.color}`};
`}
  cursor: pointer;
  &:hover {
    color: #4b515d;
    border: 1px solid #b8b6b6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;
