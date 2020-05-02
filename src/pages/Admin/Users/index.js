import React from 'react';
import { PageAdmin } from 'components/PageAdmin';

import User from 'components/User';
import { GridUsers, GridUser, Spacing } from './styles.js';

const Users = () => {
  return (
    <PageAdmin title="Usuários aguardando proposta">
      <User gradient="green" />
      <Spacing />
      <GridUsers>
        <GridUser>
          <User gradient="red" />
        </GridUser>
        <GridUser>
          <User gradient="yellow" />
        </GridUser>
        <GridUser>
          <User />
        </GridUser>
        <GridUser>
          <User />
        </GridUser>
      </GridUsers>
    </PageAdmin>
  );
};
export default Users;
