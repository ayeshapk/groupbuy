import { IconButton, makeStyles, Snackbar, Theme, } from "@material-ui/core";
import * as React from "react";
import CloseIcon from '@material-ui/icons/Close';
import { ICON_COLOR, PRIMARY_COLOR } from "../consts/const";

interface SnackBarDataInterfaceProps {
    message: string;
    openSnackbarMui: boolean;
    setOpenSnackbarMui?: () => void;
    //playMessage: (message: string) => void;
    //clearMessage: (message: string) => void;
    handleClick?: () => void;
    handleClose: (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => void;
    backgroundColor?: string;
    specialMargin?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        backgroundColor: 'green'
    },
}));

const SnackBarData: React.SFC<SnackBarDataInterfaceProps> = ({
    message,
    openSnackbarMui,
    setOpenSnackbarMui,
    handleClick,
    handleClose,
    //playMessage,
    //clearMessage,
    backgroundColor,
    specialMargin,
}) => {

    const classes = useStyles();

    //const [openSnackbarMui, setOpenSnackbarMui] = React.useState(false);

    /*const handleClick = () => {
      setOpenSnackbarMui(true);
    };
  
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSnackbarMui(false);
    };*/

    return (
        <div >
            <Snackbar
                style={{ bottom: specialMargin ? `${specialMargin}px` : '0px' }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                ContentProps={{
                    style: {
                        backgroundColor: backgroundColor ? backgroundColor : PRIMARY_COLOR,
                    }
                }}
                open={openSnackbarMui}
                autoHideDuration={4000}
                onClose={handleClose}
                message={message}
                action={
                    <React.Fragment >
                        <IconButton style={{ backgroundColor: ICON_COLOR }} size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
};


export default SnackBarData;