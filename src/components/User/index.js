import React from 'react';
import GirlMoney from 'assets/images/girlMoney.png';
import Text from 'components/Text';
import { withTheme } from 'styled-components';
import {
  Wrapper,
  LinearGradient,
  WrapperContent,
  Image,
  WrapperText,
  MenuLink,
  Spacing,
} from './styles.js';

const User = ({ gradient, theme }) => (
  <Wrapper>
    <LinearGradient gradient={gradient || 'green'} />
    <WrapperContent>
      <Image src={GirlMoney} />
      <WrapperText>
        <Text color={theme.admin.primary} size={18}>
          Joana da silva
        </Text>
        <Spacing />
        <Text color={theme.admin.gray} size={12} light>
          Perfil Arrojado
        </Text>
        <Spacing size={10} />
        <MenuLink>
          <Text color={theme.admin.primary} size={10} light>
            Ver Detalhes
          </Text>
        </MenuLink>
      </WrapperText>
    </WrapperContent>
  </Wrapper>
);

export default withTheme(User);
