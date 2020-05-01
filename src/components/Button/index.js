import React from 'react';
import { withTheme } from 'styled-components';
import { ButtonPrimary } from './styles';

const Button = ({ value, onClick, textStyles, buttonStyles }) => (
  <ButtonPrimary
    value={value}
    onClick={onClick}
    textStyles={textStyles}
    buttonStyles={buttonStyles}
  />
);

export default withTheme(Button);
