import React, { useEffect, useState } from 'react';
import { PageAdmin } from 'components/PageAdmin';

import User from 'components/User';
import { investors } from 'services/requests';
import { GridUsers, Spacing } from './styles';

const Users = () => {
  const [usersRecommended, setUsersRecommended] = useState([]);
  const user = localStorage.getItem('user');
  const userProfessional = localStorage.getItem('userProfessional');
  useEffect(() => {
    fetch(
      user
        ? 'http://localhost:3333/investor/recommended'
        : 'http://localhost:3333/professional/recommended',
      {
        headers: { Authorization: `token ${user || userProfessional}` },
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setUsersRecommended(user ? response.professionals : response.investors);
      });
  }, []);

  return (
    <PageAdmin
      title={user ? 'Profissionais Recomendados' : 'Usuários recomendados'}
    >
      <GridUsers>
        {usersRecommended.map((item) => (
          <>
            <User gradient="yellow" data={item} />
            <Spacing />
          </>
        ))}
      </GridUsers>
    </PageAdmin>
  );
};
export default Users;
