import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import muiTheme from '../theme/mui';
import { Provider } from 'react-redux';
import configureStore from '../redux';
import PageCheckFullWidth from '../containers/PageCheckFullWidth';

const store = configureStore();

const DynamicMenuWithNoSSR = dynamic(
    () => import('../../src/component/MenuApp'),
    { ssr: false }
)

const Layout = ({ children }) => {

    useEffect(() => {
    }, []);
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Provider store={store}>
                    <MuiThemeProvider theme={muiTheme}>
                        <DynamicMenuWithNoSSR />
                        <PageCheckFullWidth>
                            <div>
                                {children}
                            </div>
                        </PageCheckFullWidth>
                    </MuiThemeProvider>
                </Provider>
            </React.Fragment>
        </div>
    );
}

export default Layout;