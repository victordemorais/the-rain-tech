import React from 'react';
import { PageAdmin } from 'components/PageAdmin';
import User from 'components/User';
import ChatApp from './Chat';
import { GridUsers, GridUser } from './styles';

const Chat = () => {
  return (
    <PageAdmin noPadding>
      <ChatApp username="Teste" />
    </PageAdmin>
  );
};

export default Chat;
