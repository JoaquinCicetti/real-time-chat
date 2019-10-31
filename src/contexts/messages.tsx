import React, { useState, useEffect } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../configs/firebase';

export interface Message {
    id: string;
    user: string;
    body: string;
    date: string;
}
interface MessageContext {
    name: string;
    status: string;
    messages: Array<Message>;
    push: (message: string) => void;
    deleteMessage: (id: string) => void;
}
const getRandonName = (): string => {
    const names = ['Chile', 'Ivito', 'Joaco', 'Mauri', 'Migue', 'Toti'];
    const randomIndex = Math.floor(Math.random() * names.length);

    return names[randomIndex];
};

const voidContext: MessageContext = {
    name: '',
    status: '',
    messages: [],
    push: (message: string) => console.warn('Firebase not initialized'),
    deleteMessage: (id: string) => console.warn('Firebase not initialized'),
};
const MessageContext = React.createContext<MessageContext>(voidContext);

const MessageProvider: React.FC = ({ children }) => {
    const [status, setStatus] = useState('initalizing');
    const [name, setName] = useState(getRandonName());
    const [messages, setMessages] = useState<Array<Message>>([]);

    const push = (body: string) => {
        // check if is a name change
        const match = /\\name ([A-Za-z.]*)/.exec(body);
        if (match) {
            const newName = match[1];
            console.log(newName)
            setName(newName.substring(0, 20));
            return;
        }

        const newMessage = { user: name, body, date: new Date().getTime() };
        let collectionRef = app.firestore().collection('real-time-chat');
        collectionRef.add(newMessage).catch(e => {
            setStatus(`Could not push a new message`);
        });
    };
    const deleteMessage = async (id: string) => {
        try {
            await app
                .firestore()
                .collection('real-time-chat')
                .doc(id)
                .delete();
        } catch (e) {
            console.error('Could not delete this message');
        }
    };
    // load last theme
    useEffect(() => {
        setStatus('fetching');
        let unsubscribe = () => console.warn('fake unsuscribe');
        try {
            app.initializeApp(config);
            const query = app
                .firestore()
                .collection('real-time-chat')
                .orderBy('date');
            unsubscribe = query.onSnapshot(
                querySnapshot => {
                    const newMessages = [];
                    querySnapshot.forEach(doc => {
                        newMessages.push({ ...doc.data(), id: doc.id });
                    });
                    setMessages(newMessages);
                    setStatus('fetched');
                },
                err => {
                    setStatus(err.message);
                    console.error(`Encountered error: ${err}`);
                },
            );
        } catch (err) {
            console.error(err);
        }
        // clear this listener.
        return unsubscribe;
    }, [setStatus, setMessages]);
    const messageHandler = {
        name,
        status,
        messages,
        push,
        deleteMessage,
    };
    return <MessageContext.Provider value={messageHandler}>{children}</MessageContext.Provider>;
};

export { MessageContext, MessageProvider };
