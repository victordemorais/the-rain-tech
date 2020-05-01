import React from 'react';
import Text from 'components/Text';
import { withTheme } from 'styled-components';
import { Wrapper, Image, Spacing, Centralize } from './styles.js';

const ImgDescript = ({ titleDescription, title, img, description, theme }) => (
  <Wrapper>
    <Image src={img} />
    <Spacing />
    <Text size={18} bold color={theme.colors.gray2}>
      {title}
    </Text>
    <Spacing />
    <Text size={20} bold>
      {titleDescription}
    </Text>
    <Spacing />
    <Centralize>
      <Text light size={16}>
        {description}
      </Text>
    </Centralize>
  </Wrapper>
);

export default withTheme(ImgDescript);
