import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import muiTheme from '../theme/mui';



const Layout = ({ children }) => {

    useEffect(() => {
    }, []);
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                    <MuiThemeProvider theme={muiTheme}>
                            <div>
                                {children}
                            </div>
                    </MuiThemeProvider>
            </React.Fragment>
        </div>
    );
}

export default Layout;