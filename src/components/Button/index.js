import React from 'react';
import { withTheme } from 'styled-components';
import { ButtonPrimary } from './styles';

const Button = ({ value, onClick, textStyles }) => (
  <ButtonPrimary value={value} onClick={onClick} textStyles={textStyles} />
);

export default withTheme(Button);
