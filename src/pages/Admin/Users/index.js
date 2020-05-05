import React from 'react';
import { PageAdmin } from 'components/PageAdmin';

import User from 'components/User';
import { GridUsers, Spacing } from './styles';

const Users = () => {
  return (
    <PageAdmin title="Usuários aguardando proposta">
      <GridUsers>
        <User gradient="red" />
        <Spacing />

        <User gradient="yellow" />
        <Spacing />

        <User />
        <Spacing />

        <User />
      </GridUsers>
    </PageAdmin>
  );
};
export default Users;
