import React from 'react';
import { PageContent } from 'components/Page';
import Button from 'components/Button';
import { withTheme } from 'styled-components';
import { history } from 'routes';

import { Wrapper, Spacing } from './styles';

const SelectLogin = ({ theme }) => {
  const loginInvestor = () => {
    localStorage.setItem(
      'user',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg4NjM3NzgxLCJleHAiOjE1ODkyNDI1ODF9.AHQkKaPMX3JGVXDz0B172-XTfsW3R5L2Lods8xURzQ4'
    );
    localStorage.setItem('idUser', '1');
    localStorage.setItem('userProfessional', '');
    history.push('/admin/dashboard');
  };

  const loginProfessional = () => {
    localStorage.setItem('user', '');
    localStorage.setItem('idUser', '3');
    localStorage.setItem(
      'userProfessional',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg4NjM3NjYzLCJleHAiOjE1ODkyNDI0NjN9.qfx503Dmqj9pGshHr63ujGLmIBkORoEC6UQW9saVRcU'
    );
    history.push('/admin/dashboard');
  };

  return (
    <PageContent>
      <Wrapper>
        <Button
          buttonStyles={{
            background: `linear-gradient(
to right,${theme.admin.gradient.green})`,
            width: '49%',
            height: 60,
          }}
          textStyles={{
            color: '#fff',
          }}
          value="Investidor"
          onClick={() => loginInvestor()}
        />
        <Spacing />
        <Button
          buttonStyles={{
            background: `linear-gradient(
to right,${theme.admin.gradient.green})`,
            width: '49%',
            height: 60,
          }}
          textStyles={{
            color: '#fff',
          }}
          value="Profissional de Investimento"
          onClick={() => loginProfessional()}
        />
      </Wrapper>
    </PageContent>
  );
};
export default withTheme(SelectLogin);
