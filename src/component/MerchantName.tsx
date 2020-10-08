import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import AspectRatio from 'react-aspect-ratio';
import * as React from "react";


interface appProps {
    image?: string;
    imageAlt?: string;
    merchantName: string;
}


const MerchantName: React.FunctionComponent<appProps> = ({
    /*appProps HERE */
    image,
    imageAlt,
    merchantName,
}) => {
    return (
        <div>
            <Paper style={{ margin: '10px' }}>
                <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" >
                    <Grid item xs={1} />
                    <Grid item xs={4} style={{ padding: '15px', margin: '0 auto' }}>
                            <AspectRatio ratio="1/1" >
                                <img src={image} alt={imageAlt} style={{ borderRadius: '50%' }} />
                            </AspectRatio>
                    </Grid>
                    <Grid item xs={7} style={{ padding: '15px', margin: '0 auto' }}>
                        <Typography variant='caption'>Merchant</Typography>
                        <Typography variant='h6'>{merchantName}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};


export default MerchantName;