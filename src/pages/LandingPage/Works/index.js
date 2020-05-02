import React from 'react';
import { withTheme } from 'styled-components';
import { Page, PageContent } from 'components/Page';
import Text from 'components/Text';
import Button from 'components/Button';
import {
  Arround,
  ArroundBorder,
  Wrapper,
  Statistcs,
  GroupText,
  GirlMoney,
  Spacing,
} from './styles';

const Works = ({ theme }) => {
  return (
    <Arround>
      <ArroundBorder />
      <Page backgroundColor={theme.colors.primary}>
        <PageContent>
          <Wrapper>
            <Statistcs />
            <GirlMoney />
            <GroupText>
              <p>
                <Text size={60} bold color={theme.colors.blank}>
                  Como Funciona?
                </Text>
              </p>
              <p>
                <Text light size={16} color={theme.colors.blank}>
                  Cadastre de maneira prática e grátis para gerar seu perfil de
                  investidor. Vamos encontrar para você profissionais para te
                  ajudar nas suas finanças e investimentos.
                </Text>
              </p>
              <Spacing />
              <Button
                value="Saiba Mais"
                textStyles={{
                  color: theme.colors.primary,
                  size: 16,
                }}
                buttonStyles={{
                  background: theme.colors.blank,
                  width: 180,
                  boxShadow: 0,
                }}
                background={theme.colors.blank}
              />
            </GroupText>
          </Wrapper>
        </PageContent>
      </Page>
      <ArroundBorder bottom />
    </Arround>
  );
};
export default withTheme(Works);
