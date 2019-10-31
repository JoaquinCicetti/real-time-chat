import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import './styles.scss';

const Info: React.FC = () => {
    const location = useLocation();
    const urlPrefix = process.env.NODE_ENV === 'development' ? '' : '/real-time-chat/';
    return location && location.pathname === `/info` ? (
        <div className="info">
            <div className="about">
                <b className="appName">Dependencies</b>
                <hr />
                <p className="version">React: 16.10.2</p>
                <p className="version">Firebase: 7.2.1</p>
                <p className="version">Node-sass: 4.12.0</p>
                <p className="version">React-pose: 4.0.9</p>
                <p className="version">Popmotion: 8.7.0</p>
                <p className="version">React-router-dom: 5.1.2</p>
                <p className="version">Typescript: 3.6.4</p>
                <hr />
                <a
                    className="repo"
                    href="https://github.com/JoaquinCicetti/real-time-chat"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="repository" src={`${urlPrefix}GitHub-Mark-32px.png`} />
                </a>
            </div>
        </div>
    ) : (
        <Redirect
            to={{
                pathname: `/chat`,
                state: { from: location },
            }}
        />
    );
};

export default Info;
