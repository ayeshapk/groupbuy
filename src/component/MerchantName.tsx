import { Grid, Paper, Typography } from "@material-ui/core";
import AspectRatio from 'react-aspect-ratio';
import * as React from "react";


interface appProps {
    type:string;
    image?: string;
    imageAlt?: string;
    merchantName: string;
}


const MerchantName: React.FunctionComponent<appProps> = ({
    /*appProps HERE */
    type,
    image,
    imageAlt,
    merchantName,
}) => {
    return (
        <div>
            {type === 'Paper' && <Paper style={{ margin: '10px',/*paddingTop:'2vh',paddingBottom:'2vh'*/ }}>
                <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" >
                    <Grid item xs={1} />
                    <Grid item xs={5} style={{ padding: '15px', margin: '0 auto' }}>
                            <AspectRatio ratio="1/1" >
                                <img src={image} alt={imageAlt}  />
                            </AspectRatio>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '15px', margin: '0 auto' }}>
                        <Typography variant='caption'>Merchant</Typography>
                        <Typography variant='h6'>{merchantName}</Typography>
                    </Grid>
                </Grid>
            </Paper>}
            {type === 'div' && <div style={{ margin: '10px',/*paddingTop:'2vh',paddingBottom:'2vh'*/ }}>
                <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" >
                    <Grid item xs={1} />
                    <Grid item xs={5} style={{ padding: '15px', margin: '0 auto' }}>
                            <AspectRatio ratio="1/1" >
                                <img src={image} alt={imageAlt} />
                            </AspectRatio>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '15px', margin: '0 auto' }}>
                        <Typography variant='caption'>Merchant</Typography>
                        <Typography variant='h6'>{merchantName}</Typography>
                    </Grid>
                </Grid>
            </div>}
        </div>
    );
};


export default MerchantName;