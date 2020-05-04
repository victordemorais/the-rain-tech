import React from 'react';
import { PageContent } from 'components/Page';
import LogoTheRain from 'assets/images/logo.png';
import Facebook from 'assets/images/social/facebook.png';
import Linkedin from 'assets/images/social/linkedin.png';
import Google from 'assets/images/social/google.png';
import Text from 'components/Text';
import { withTheme } from 'styled-components';
import { Input } from 'components/Input';
import Button from 'components/Button';
import {
  Logo,
  BoxCall,
  Call,
  Spacing,
  BoxButtons,
  SocialGroup,
  SocialIcon,
  SocialGroupText,
} from './styles';

const Header = ({ theme }) => {
  return (
    <PageContent>
      <Logo src={LogoTheRain} />
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
        <BoxButtons>
          <Button
            value="Quero lucrar com meus investimentos"
            textStyles={{
              bold: true,
              color: theme.colors.blank,
              size: 16,
            }}
            onClick={() => alert('oi')}
          />
          <SocialGroupText>
            <Text light color={theme.colors.gray} size={13}>
              Conecte-se com
            </Text>
            <SocialGroup>
              <SocialIcon src={Google} />
              <SocialIcon src={Linkedin} />
              <SocialIcon src={Facebook} />
            </SocialGroup>
          </SocialGroupText>
        </BoxButtons>
      </BoxCall>
    </PageContent>
  );
};

export default withTheme(Header);
