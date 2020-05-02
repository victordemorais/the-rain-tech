import styled from 'styled-components';
import Theme from 'styles/theme';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 140px;
  background: ${Theme.admin.blank};
`;

export const LinearGradient = styled.div`
  width: 100%;
  height: 10px;
  ${(props) =>
    props.gradient &&
    `background: linear-gradient(
      to right,
      ${Theme.admin.gradient[props.gradient]}
    );`}
`;

export const WrapperContent = styled.div`
  width: 100%;
  padding: 0px 10px 10px 10px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Image = styled.img`
  width: 100px;
  object-fit: contain;
  height: 100px;
  background-color: ${Theme.admin.background};
  border-radius: 100%;
`;

export const WrapperText = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`;

export const MenuLink = styled(Link)`
  color: ${Theme.admin.primary};
`;

export const Spacing = styled.div`
  margin-top: ${(props) => (props.size ? `${props.size}px` : '0px')};
`;
