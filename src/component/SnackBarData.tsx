import { IconButton, Snackbar } from "@material-ui/core";
import * as React from "react";
import CloseIcon from '@material-ui/icons/Close';

interface SnackBarDataInterfaceProps {
    message: string;
    openSnackbarMui:boolean;
    setOpenSnackbarMui?:()=>void;
    //playMessage: (message: string) => void;
    //clearMessage: (message: string) => void;
    handleClick?:()=>void;
    handleClose:(event: React.SyntheticEvent | React.MouseEvent, reason?: string)=>void;
}

const SnackBarData: React.SFC<SnackBarDataInterfaceProps> = ({
    message,
    openSnackbarMui,
    setOpenSnackbarMui,
    handleClick,
    handleClose,
    //playMessage,
    //clearMessage
}) => {
    
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
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSnackbarMui}
                autoHideDuration={4000}
                onClose={handleClose}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
};


export default SnackBarData;