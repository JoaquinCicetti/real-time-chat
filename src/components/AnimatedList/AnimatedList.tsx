import React, { useState, useRef, useEffect, useContext } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Message, MessageContext } from '../../contexts/messages';
import './AnimatedList.scss';

interface Props {
    status: string;
    messages: Array<Message>;
    deleteMessage: (id: string) => void;
}

const AnimatedItem = posed.ul({
    exit: { opacity: 0, height: 0 },
    enter: {
        opacity: 1,
        height: 'auto',
    },
    unselected: {
        position: 'static',
        width: '100%',
        height: 'auto',
        flip: true,
    },
    selected: {
        position: 'fixed',
        width: '100%',
        left: 0,
        bottom: 0,
        flip: true,
    },
});

const AnimatedList: React.FC<Props> = ({ messages, status, deleteMessage }) => {
    const [selected, setSelected] = useState<string>();
    const { name } = useContext(MessageContext);
    // this ref saves the length of the messages array
    const prevSizeRef = useRef(0);
    const listRef = useRef(null);
    const onSelectMessage = (id: string) => {
        if (selected === id) {
            setSelected('id');
            deleteMessage(id);
        } else {
            setSelected(id);
        }
    };
    const isAnImageURL = (body: string = ''): boolean => {
        return /(https?:\/\/.*\.(?:png|jpg))/.test(body);
    };
    // moment is to big
    const formatDate = (date: string) => {
        const asDate = new Date(date);
        const minutes = asDate.getMinutes();
        const hours = asDate.getHours();
        return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    };
    useEffect(() => {
        if (listRef && messages.length && prevSizeRef.current < messages.length) {
            listRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        prevSizeRef.current = messages.length;
    }, [messages, listRef]);
    return (
        <div className="list">
            <PoseGroup>
                {messages.map((message: Message) => {
                    const { id, body, date, user } = message;
                    const pose = isAnImageURL(body)
                        ? selected === id
                            ? 'selected'
                            : 'unselected'
                        : 'enter';
                    return (
                        <AnimatedItem
                            pose={pose}
                            className={`message ${
                                selected === id && !isAnImageURL(body) ? 'selected' : ''
                            } ${name === user ? 'own' : ''}`}
                            key={`message${id}`}>
                            <div className={`content `} onClick={() => onSelectMessage(id)}>
                                <p className="header">
                                    <span className="user">{user}</span>
                                    <span className="date">{formatDate(date)} Hs.</span>
                                </p>
                                {isAnImageURL(body) ? (
                                    <img
                                        src={body}
                                        alt="This message is an URL "
                                        className="isAnImage"
                                    />
                                ) : (
                                    <p className="body">{body}</p>
                                )}{' '}
                            </div>
                        </AnimatedItem>
                    );
                })}
            </PoseGroup>
            <span className="dummy" ref={listRef} />
            {status === 'fetching' && <p>fetching</p>}
        </div>
    );
};

export default AnimatedList;
