import React, { useState, useRef, useEffect } from 'react';
import { MorphingIcon } from '..';
import './ChatInput.scss';

interface Props {
    push: (message: string) => void;
}
const ChatInput: React.FC<Props> = ({ push }) => {
    const [message, setMessage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setMessage(value);
    };
    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && message) {
            push(message);
            setMessage('');
        }
    };
    const clearInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if (message) {
            push(message);
            setMessage('');
        } else {
            if (inputRef && inputRef.current !== null) inputRef.current.focus();
        }
    };
    useEffect(() => {
        if (inputRef && inputRef.current !== null) inputRef.current.focus();
    }, []);
    return (
        <div className="chatInput">
            <input
                placeholder="\name [your name]"
                value={message}
                onChange={onInputChange}
                ref={inputRef}
                onKeyPress={onKeyPress}
            />
            <button title="Send" className="sendButton" onClick={clearInput}>
                <MorphingIcon icon={message ? 'send' : 'chat'} />
            </button>
        </div>
    );
};

export default ChatInput;
