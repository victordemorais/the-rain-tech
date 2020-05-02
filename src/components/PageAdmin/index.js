import React from 'react';
import MenuJson from 'menu';
import { Container, Content, Menu, Nav, ContentBody, MenuLink } from './styles';

export const PageAdmin = ({ children }) => (
  <Container>
    <Menu>
      {MenuJson.acessor.map((item) => (
        <MenuLink selected={item.name === 'Dashboard'}>{item.name}</MenuLink>
      ))}
    </Menu>
    <Content>
      <Nav />
      <ContentBody>{children}</ContentBody>
    </Content>
  </Container>
);
