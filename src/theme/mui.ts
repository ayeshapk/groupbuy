import {createMuiTheme} from '@material-ui/core/styles';


const muiTheme = createMuiTheme({
    typography: {
        // To make an immediate switch to typography v2 you can simply pass useNextVariants: true when calling createMuiTheme: https://v3-9-0.material-ui.com/style/typography/#migration-to-typography-v2
        fontFamily: [
            'Roboto',
            'Lato',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#F26E22',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contast with palette.primary.main
        },
        secondary: {
             // light: will be calculated from palette.primary.main,
            main: '#F26D85',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: will be calculated to contast with palette.primary.main
        },
        // error: will use the default color
    },
});

export default muiTheme
