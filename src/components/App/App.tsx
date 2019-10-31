import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import { useTheme } from '../../hooks';
import { ToggleButton, MorphingIcon } from '../';
import './App.scss';
import Info from '../../pages/Info';
import Chat from '../../pages/Chat';
const RouteContainer = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
});

const App: React.FC = () => {
    const { theme, Themes, toggleTheme } = useTheme();
    return (
        <div className={theme === Themes.dark ? 'theme-dark' : 'theme-light'}>
            <Route
                render={({ location }) => {
                    return (
                        console.log(location),
                        (
                            <div className="container">
                                <span className="notch" />
                                <div className="welcome">
                                    <h1 className="title">Real-time chat</h1>
                                    <div className="divider">
                                        <span className="hr" />
                                        <Link
                                            className="link"
                                            to={`${
                                                location.pathname === `/chat` ||
                                                location.pathname === `/`
                                                    ? `/info`
                                                    : `/chat`
                                            }`}>
                                            <MorphingIcon
                                                width={32}
                                                height={32}
                                                icon={
                                                    location.pathname === `/chat` ||
                                                    location.pathname === `/`
                                                        ? `info`
                                                        : `chat`
                                                }
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <PoseGroup>
                                    <RouteContainer
                                        key={`routerContainer${location.key}`}
                                        className="routerContainer">
                                        <Switch location={location} key={'switch'}>
                                            <Route path={`/chat`} component={Chat} key="chat" />
                                            <Route path={`/info`} component={Info} key="info" />
                                            <Route component={Chat} key="default" />
                                        </Switch>
                                    </RouteContainer>
                                </PoseGroup>
                                <div className="footer">
                                    <ToggleButton
                                        checked={theme === Themes.light}
                                        toggle={toggleTheme}
                                        checkedIcon="sun"
                                        uncheckedIcon="moon"
                                        big
                                    />
                                </div>
                            </div>
                        )
                    );
                }}
            />
        </div>
    );
};

export default App;
