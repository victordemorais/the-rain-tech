import React from 'react';
import { Font } from './styles';

const Text = ({ children, bold, size, color, light, regular = true }) => {
  return (
    <Font bold={bold} size={size} color={color} light={light} regular={regular}>
      {children}
    </Font>
  );
};

export default Text;
