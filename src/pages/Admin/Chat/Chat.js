import '@progress/kendo-theme-material/dist/all.css';
import React, { Component } from 'react';
import Chat from 'twilio-chat';
import GirlMoney from 'assets/images/girlMoney.png';
import Text from 'components/Text';
import { TiChevronLeft, TiArrowForwardOutline } from 'react-icons/ti';

import { InputText } from 'components/Input/styles';
import {
  WrapperChat,
  InfoUser,
  UserImage,
  Image,
  Status,
  InfoText,
  Message,
  MessageText,
  ChatRender,
  WrapperInput,
  Icon,
  ChatMessages,
} from './styles';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      messages: [],
      message: '',
    };

    this.user = {
      id: props.username,
      name: props.username,
    };
    this.messagesEndRef = React.createRef();

    this.setupChatClient = this.setupChatClient.bind(this);
    this.messagesLoaded = this.messagesLoaded.bind(this);
    this.messageAdded = this.messageAdded.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    fetch('http://localhost:3333/chat/token', {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      body: `identity=${encodeURIComponent(this.user.name)}`,
    })
      .then((res) => res.json())
      .then((data) => Chat.create(data.token))
      .then(this.setupChatClient)
      .catch(this.handleError);
    this.scrollToBottom();
  }

  componentWillUnmount() {
    this.client.shutdown();
  }

  setupChatClient(client) {
    this.client = client;
    this.client
      .getChannelByUniqueName('general')
      .then((channel) => channel)
      .catch((error) => {
        if (error.body.code === 50300) {
          return this.client.createChannel({ uniqueName: 'general' });
        }
        this.handleError(error);
        return error;
      })
      .then((channel) => {
        this.channel = channel;
        return this.channel.join().catch(() => {});
      })
      .then(() => {
        this.setState({ isLoading: false });
        this.channel.getMessages().then(this.messagesLoaded);
        this.channel.on('messageAdded', this.messageAdded);
      })
      .catch(this.handleError);
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  handleError(error) {
    this.setState({
      error: 'Could not load chat.' || error,
    });
  }

  messagesLoaded(messagePage) {
    this.setState({
      messages: messagePage.items.map(this.twilioMessageToKendoMessage),
    });
  }

  messageAdded(message) {
    this.setState((prevState) => ({
      messages: [
        ...prevState.messages,
        this.twilioMessageToKendoMessage(message),
      ],
    }));
  }

  sendMessage() {
    const { message } = this.state;
    this.channel.sendMessage(message);
    this.setState({ message: '' });
  }

  // eslint-disable-next-line class-methods-use-this
  twilioMessageToKendoMessage(message) {
    return {
      text: message.body,
      author: { id: message.author, name: message.author },
      timestamp: message.timestamp,
    };
  }

  render() {
    const { messages, message, error, isLoading } = this.state;
    console.log(messages, 'messages');
    return (
      <WrapperChat>
        <InfoUser>
          <TiChevronLeft size={25} />
          <Image>
            <UserImage src={GirlMoney} />
            <Status />
          </Image>
          <InfoText>
            <Text>Joana Darkson</Text>
            <Text light size={12}>
              Online
            </Text>
          </InfoText>
        </InfoUser>
        <ChatRender>
          <ChatMessages>
            {messages.map((i) => {
              const userId = i.author.id === this.user.id;
              return (
                <Message myUser={userId}>
                  <MessageText myUser={userId}>
                    <Text
                      size={16}
                      light
                      color={userId ? '#EAE8FB' : '#A5A5A5'}
                    >
                      {i.text}
                    </Text>
                  </MessageText>
                </Message>
              );
            })}
            <div ref={this.messagesEndRef} />
          </ChatMessages>

          <WrapperInput>
            <InputText
              value={message}
              placeHolder="Digite aqui sua mensagem"
              onChange={(e) => {
                this.setState({ message: e.target.value });
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') this.sendMessage();
              }}
            />
            <Icon onClick={this.sendMessage}>
              <TiArrowForwardOutline size={26} color="#c9c9c9" />
            </Icon>
          </WrapperInput>
        </ChatRender>
      </WrapperChat>
    );
  }
}

export default ChatApp;
