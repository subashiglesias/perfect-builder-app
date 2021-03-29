import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import DummyLoader from './DummyLoader';
import config from '../../config';
import {RouterPaths} from "../../constants";
import AdminAddHomePage from "../AdminAddHomePage";
import LandingPage from "../LandingPage";
import './ContentArea.scss';
import ForbiddenPage from "../ForbiddenPage";

const ProjectHomePageComponent = Loadable({
    loader: async () => AdminAddHomePage,
    loading: DummyLoader,
});

const LandingPageComponent = Loadable({
    loader: async () => LandingPage,
    loading: DummyLoader,
});

const ForbiddenPageComponent = Loadable({
    loader: async () => ForbiddenPage,
    loading: DummyLoader,
});

const getPath = path => config.appRoute + path;

const ContentArea = ({getSession, currentSession}) => {

    useEffect(() => {
        if(!Object.keys(currentSession).length){
            getSession();
        }
    }, [currentSession])

    return (
    <div className="content-area">
        <Switch>
            <Route exact path={getPath(RouterPaths.ROOT)} component={LandingPageComponent}/>
            <Route path={getPath(RouterPaths.PROJECTS)} component={ProjectHomePageComponent}/>
            <Route path={getPath(RouterPaths.FORBIDDEN)} component={ForbiddenPageComponent}/>
            <Route
                path="/*/*"
                render={() =>  <Redirect to={getPath(RouterPaths.FORBIDDEN)} /> }
            />
            <Route
                path="/*"
                render={() =>  <Redirect to={getPath(RouterPaths.ROOT)} /> }
            />
        </Switch>
    </div>
)};

export default ContentArea;
