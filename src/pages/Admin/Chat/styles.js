import styled from 'styled-components';
import Theme from 'styles/theme';

export const WrapperChat = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background: #fff;
  padding-top: 20px;
`;

export const InfoUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  height: 100px;
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 100%;
  border: 1px solid ${Theme.admin.gray};
  background-color: ${Theme.admin.background};
`;

export const Image = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-left: 20px;
`;

export const Loading = styled.img`
  width: 300px;
`;

export const Status = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  right: 5px;
  bottom: 5px;
  background-color: green;
  border: 0.5px solid ${Theme.admin.gray};
  border-radius: 100%;
`;

export const InfoText = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

export const ChatRender = styled.div`
  width: 100%;
  padding: 20px;
  height: calc(100vh - 180px);
  position: relative;
`;

export const ChatMessages = styled.div`
  width: 100%;
  height: calc(100% - 45px);
  position: relative;
  overflow: auto;
`;

export const Message = styled.div`
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.myUser ? 'flex-end' : 'flex-start')};
`;

export const Centralize = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MessageText = styled.div`
  display: flex;
  background: ${(props) => (props.myUser ? '#20B5B9' : '#F3F3F3')};
  max-width: 400px;
  border-radius: 8px;
  padding: 10px 20px;
`;

export const WrapperInput = styled.div`
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: calc(100% - 40px);
`;

export const Icon = styled.div`
  position: absolute;
  bottom: 12px;
  right: 10px;
`;
