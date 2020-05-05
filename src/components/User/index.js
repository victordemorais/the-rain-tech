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

const User = ({ gradient, theme, data }) => {
  const openChat = (clicked) => {
    const user = localStorage.getItem('user');
    const idUser = localStorage.getItem('idUser');
    localStorage.setItem('selectedUser', clicked.name);
    const userProfessional = localStorage.getItem('userProfessional');
    fetch('http://localhost:3333/chat', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        investor: user ? parseInt(idUser) : clicked.id,
        professional: user ? clicked.id : parseInt(idUser),
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        localStorage.setItem('sala', response.room);
        history.push('chat');
      });
  };

  const [viewDetail, setViewDetail] = useState(false);
  return (
    <Wrapper>
      <LinearGradient gradient={gradient || 'green'} />
      <WrapperContent>
        <Image src={GirlMoney} />
        <WrapperText>
          <Text color={theme.admin.primary} size={18}>
            {data.name}
          </Text>
          <Spacing />
          <Text color={theme.admin.gray} size={12} light>
            Perfil {data.investor_profile ? 'Moderado' : 'Arrojado'}
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
                {data.email}
              </Text>
            </Info>
            <Info>
              <Text color={theme.admin.primary} size={18}>
                Telefone
              </Text>
              <Spacing />
              <Text color={theme.admin.gray} size={12} light>
                {data.phone}
              </Text>
            </Info>
            <Info>
              <Text color={theme.admin.primary} size={18}>
                Estado
              </Text>
              <Spacing />
              <Text color={theme.admin.gray} size={12} light>
                {`${data.city} - ${data.uf}`}
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
            onClick={() => openChat(data)}
            value="Conversar"
          />
        </MarginAuto>
      </WrapperContent>
    </Wrapper>
  );
};

export default withTheme(User);
