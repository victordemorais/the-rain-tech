import React from 'react';
import MenuJson from 'menu';
import Text from 'components/Text';
import Logo from 'assets/images/logo.png';
import {
  Container,
  Content,
  Menu,
  Nav,
  Title,
  ContentBody,
  MenuLink,
  ImageLogo,
  SpacingMenu,
} from './styles';

export const PageAdmin = ({ title, children, noPadding }) => (
  <Container>
    <Menu>
      <ImageLogo src={Logo} />
      <SpacingMenu />
      {MenuJson.acessor.map((item) => (
        <MenuLink selected={item.name === 'Usuários'}>{item.name}</MenuLink>
      ))}
    </Menu>
    <Content>
      <Nav />

      <ContentBody noPadding={noPadding}>
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
