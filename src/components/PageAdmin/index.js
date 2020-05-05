import React from 'react';
import MenuJson from 'menu';
import Text from 'components/Text';
import LogoGorila from 'assets/images/logo-gorila.png';
import { history } from 'routes';
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

export const PageAdmin = ({ title, children, noPadding }) => {
  const location = history.location.pathname.split('/')[2];

  const changePage = (route) => {
    history.push(route);
  };

  return (
    <Container>
      <Menu>
        <ImageLogo src={LogoGorila} />
        <SpacingMenu />
        {MenuJson.acessor.map((item) => (
          <MenuLink
            selected={item.route === location}
            onClick={() => changePage(item.route)}
          >
            {item.name}
          </MenuLink>
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
};
