import React from 'react';
import { PageContent } from 'components/Page';
import LogoGorila from 'assets/images/logo-gorila.png';
import Text from 'components/Text';
import { withTheme } from 'styled-components';
import { Input } from 'components/Input';
import Button from 'components/Button';
import { Logo, BoxCall, Call, Spacing } from './styles';

const Header = ({ theme }) => {
  return (
    <PageContent>
      <Logo src={LogoGorila} />
      <Call>
        <Text size={55} bold color={theme.colors.primary}>
          Invista
        </Text>
        <Text size={55} bold>
          {' '}
          sem medo!
        </Text>
      </Call>
      <BoxCall>
        <Text size={14} light>
          Tenha ajuda de profissionais de finanças para seus investimentos e
          acabe agora mesmo o medo de investir.
        </Text>
        <Spacing />
        <Input placeHolder="Nome" />
        <Spacing />
        <Input placeHolder="Email" />
        <Spacing />
        <Button
          value="Quero lucrar com meus investimentos"
          textStyles={{
            bold: true,
            color: theme.colors.blank,
            size: 16,
          }}
          onClick={() => alert('oi')}
        />
      </BoxCall>
    </PageContent>
  );
};

export default withTheme(Header);
