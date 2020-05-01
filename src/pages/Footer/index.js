import React from 'react';
import { PageContent } from 'components/Page';
import Text from 'components/Text';

import {
  Wrapper,
  WrapperCollumn,
  Gorila,
  Spacing,
  TheRainTech,
} from './styles';

const Footer = () => {
  return (
    <PageContent>
      <Wrapper>
        <WrapperCollumn start>
          <Gorila />
          <Spacing />
          <Text>
            ©2020 Gorila - Gestão da Experiência. Todos os direitos reservados.
          </Text>
        </WrapperCollumn>
        <WrapperCollumn>
          <Text light>Powered By:</Text>
          <TheRainTech />
        </WrapperCollumn>
      </Wrapper>
    </PageContent>
  );
};

export default Footer;
