import styled from 'styled-components';
import Theme from 'styles/theme';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${(props) => `
    ${props.backgroundColor && `background-color:${props.backgroundColor};`}
  `}
  width: 100%;
  display: flex;
  background: ${Theme.admin.background};
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

export const ContentBody = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 40px 70px;
`;

export const Menu = styled.div`
  height: 100vh;
  background-color: ${Theme.admin.blank};
  width: 320px;
  border-right: 1px solid ${Theme.admin.border};
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;

export const MenuLink = styled(Link)`
  font-family: 'Roboto';
  text-decoration: none;
  width: 100%;

  font-size: 16px;
  font-weight: 300;
  color: #000;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 120px;
  margin-bottom: 10px;
  ${(props) =>
    props.selected && `border-right: 6px solid ${Theme.admin.menuSelected};`}
`;

export const Nav = styled.div`
  height: 55px;
  background-color: ${Theme.admin.blank};
  width: width:100%;
  border-bottom: 1px solid ${Theme.admin.border};
`;
