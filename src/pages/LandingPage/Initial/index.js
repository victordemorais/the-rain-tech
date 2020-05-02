import React from 'react';
import { PageContent } from 'components/Page';
import LogoGorila from 'assets/images/logo-gorila.png';
import Facebook from 'assets/images/social/facebook.png';
import Linkedin from 'assets/images/social/linkedin.png';
import Google from 'assets/images/social/google.png';
import Text from 'components/Text';
import { withTheme } from 'styled-components';
import ImgDescript from 'components/ImgDescript';
import Money from 'assets/images/icons/money.png';
import MoneyGraph from 'assets/images/icons/moneyGraph.png';
import Calc from 'assets/images/icons/calc.png';
import { Wrapper } from './styles';

const Initial = ({ theme }) => {
  const options = [
    {
      titleDescription: 'Faça seu Cadastro',
      title: 'Passo 1',
      img: Money,
      description: 'Sed in lectus quis urna suscipit sodales lacinia eu purus.',
    },
    {
      titleDescription: 'Encontre Profissionais',
      title: 'Passo 2',
      img: Calc,
      description: 'Sed in lectus quis urna suscipit sodales lacinia eu purus.',
    },
    {
      titleDescription: 'Receba Propostas',
      title: 'Passo 3',
      img: MoneyGraph,
      description: 'Sed in lectus quis urna suscipit sodales lacinia eu purus.',
    },
  ];
  return (
    <PageContent>
      <Wrapper>
        {options.map((item) => (
          <ImgDescript
            key={item.title}
            titleDescription={item.titleDescription}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </Wrapper>
    </PageContent>
  );
};

export default withTheme(Initial);
