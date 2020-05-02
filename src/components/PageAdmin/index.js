import React from 'react';
import MenuJson from 'menu';
import Text from 'components/Text';
import {
  Container,
  Content,
  Menu,
  Nav,
  Title,
  ContentBody,
  MenuLink,
} from './styles';

export const PageAdmin = ({ title, children }) => (
  <Container>
    <Menu>
      {MenuJson.acessor.map((item) => (
        <MenuLink selected={item.name === 'Usuários'}>{item.name}</MenuLink>
      ))}
    </Menu>
    <Content>
      <Nav />

      <ContentBody>
        {title && (
          <Title>
            <Text size={20} light>
              {title}
            </Text>
          </Title>
        )}
        {children}
      </ContentBody>
    </Content>
  </Container>
);
