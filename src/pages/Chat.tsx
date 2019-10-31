import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { AnimatedList, ChatInput } from '../components';
import './styles.scss';
import { MessageContext } from '../contexts/messages';
const Chat: React.FC = () => {
    const { push, messages, status, name, deleteMessage } = useContext(MessageContext);
    const location = useLocation();
    return location && (location.pathname === `/chat` || location.pathname === `/`) ? (
        <div className="chat">
            <div className="intro">
                <p>
                    Hi! <span className="name">{name}</span> 
                </p>
                <p>You don't need refresh to see the changes... </p>
                <p>(open it in two windows) 👀</p>
            </div>
            <AnimatedList deleteMessage={deleteMessage} messages={messages} status={status} />
            <ChatInput push={push} />
        </div>
    ) : (
        <Redirect
            to={{
                pathname: `/info`,
                state: { from: location },
            }}
        />
    );
};

export default Chat;
