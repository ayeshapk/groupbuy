import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, CssBaseline, NoSsr } from '@material-ui/core';
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
                        <NoSsr>
                            <div style={{margin:'5px'}}>
                            {children}
                            </div>
                        </NoSsr>
                    </div>
                </MuiThemeProvider>
            </React.Fragment>
        </div>
    );
}

export default Layout;