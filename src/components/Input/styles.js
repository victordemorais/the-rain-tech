import styled from 'styled-components';

export const InputText = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: props.placeHolder,
}))`
  width: 100%;
  background: #fff;
  color: #525865;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto', sans-serif;
  font-size: 0.875em;
  line-height: 1.45;
  outline: none;
  padding: 0 1em;
  height: 50px;

  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out;
  &:hover {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
  }
  &:focus {
    color: #4b515d;
    border: 1px solid #b8b6b6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;
