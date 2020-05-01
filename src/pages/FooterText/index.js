import React from 'react';
import { Page } from 'components/Page';
import Text from 'components/Text';

import { Wrapper, WrapperText } from './styles';

const FooterText = () => {
  return (
    <Page>
      <Wrapper>
        <WrapperText>
          <Text size={22}>
            A maneira mais prática para investir e começar a ganhar dinheiro de
            verdade.
          </Text>
        </WrapperText>
      </Wrapper>
    </Page>
  );
};

export default FooterText;
