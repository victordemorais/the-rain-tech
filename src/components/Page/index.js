import React from 'react';
import { Container, Content } from './styles';

export const PageContent = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export const Page = ({ children, backgroundColor }) => (
  <Container backgroundColor={backgroundColor}>{children}</Container>
);
