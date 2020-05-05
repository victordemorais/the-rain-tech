import React, { useState } from 'react';
import GirlMoney from 'assets/images/girlMoney.png';
import Text from 'components/Text';
import Button from 'components/Button';
import { withTheme } from 'styled-components';
import { history } from 'routes';
import {
  Wrapper,
  LinearGradient,
  WrapperContent,
  Image,
  WrapperText,
  MenuLink,
  WrapperInfo,
  Spacing,
  Info,
  MarginAuto,
} from './styles';

const User = ({ gradient, theme }) => {
  const [viewDetail, setViewDetail] = useState(false);
  return (
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

          <MenuLink onClick={() => setViewDetail(!viewDetail)}>
            <Text color={theme.admin.primary} size={10} light>
              {!viewDetail ? 'Ver Detalhes' : 'Fechar Detalhes'}
            </Text>
          </MenuLink>
        </WrapperText>
        {viewDetail && (
          <WrapperInfo>
            <Info>
              <Text color={theme.admin.primary} size={18}>
                Email
              </Text>
              <Spacing />
              <Text color={theme.admin.gray} size={12} light>
                teste@teste.com
              </Text>
            </Info>
            <Info>
              <Text color={theme.admin.primary} size={18}>
                Telefone
              </Text>
              <Spacing />
              <Text color={theme.admin.gray} size={12} light>
                +55 (99) 9 9999-9999
              </Text>
            </Info>
            <Info>
              <Text color={theme.admin.primary} size={18}>
                Estado
              </Text>
              <Spacing />
              <Text color={theme.admin.gray} size={12} light>
                São Paulo - SP
              </Text>
            </Info>
          </WrapperInfo>
        )}
        <MarginAuto>
          <Button
            buttonStyles={{
              background: `linear-gradient(
          to right,${theme.admin.gradient.green})`,
              width: 120,
              height: 40,
            }}
            textStyles={{
              color: '#fff',
            }}
            onClick={() => history.push('chat')}
            value="Conversar"
          />
        </MarginAuto>
      </WrapperContent>
    </Wrapper>
  );
};

export default withTheme(User);
