
import { AppBar, Card, CardActionArea, CardContent, CardMedia,  Fab, Grid,  Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import AddIcon from '@material-ui/icons/Add';
import { useRouter } from 'next/router';

let card = [
    { id: 0, number: '**** **** **** 4543', name: 'David Spade', exp: '09 - 18', select: true },
    { id: 1, number: '**** **** **** 4500', name: 'David Spade', exp: '09 - 19', select: false },
];


function CardPayment() {

    const [itemState, setItemState] = useState(card);
    const { width, height } = useWindowSize()
    const router = useRouter()
    
    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);

    const linkToPageHome = () =>{
        router.push('/')
    }


    return (
        <div>
  <Typography variant='h6' color='primary' style={{ marginLeft: '15px' }}>My Card</Typography>
            {itemState && itemState.map((item, index: number) => (
                <Card key={index} style={{ margin: '10px', position: 'relative' }}>
                    <CardActionArea>
                         <CardMedia
                            component="img"
                            alt="active Card"
                            height="140"
                            image={item.select === true ? "https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600678969/Component_6_1_h15uwi.png":"https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600691214/Component_7_1_ziew0o.png"}
                            title="active Card"
                        />
                
                        <CardContent style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', padding: '16px' }}>
                            <img style={{ float: 'right' }} src='https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600690847/Component_7_1_fnqmez.png' />
                            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                                {item.number}
                            </Typography>
                            <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                                <Grid item xs={6}>
                                    <Typography variant="caption" color="textSecondary" component="p">
                                        Card Holder
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" color="textSecondary" component="p">
                                        Expiry
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                                <Grid item xs={6}>
                                    <Typography variant="h6" color="textSecondary" component="p">
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" color="textSecondary" component="p">
                                        {item.exp}
                                    </Typography>
                                </Grid>
                            </Grid>



                        </CardContent>
                    </CardActionArea>
                </Card>))}

            <AppBar position="fixed" color='inherit' style={{ top: 'auto', bottom: 0, padding: '20px' }}>
                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                    <Grid item xs={6}>
                        <Fab
                            style={{ backgroundColor: 'white', color: '#F26D85', width: '100%' }}
                            variant="extended"
                            size="small"
                            aria-label="add"
                        >
                            ADD CARD
                                <AddIcon fontSize='small' />

                        </Fab>
                    </Grid>
                    <Grid item xs={6}>
                        <Fab
                            style={{ backgroundColor: '#F26E22', color: 'white', width: '100%' }}
                            variant="extended"
                            size="small"
                            aria-label="add"
                            onClick={linkToPageHome}
                        >
                            CONFIRM
                                <ArrowForwardIosIcon fontSize='small' />

                        </Fab>
                    </Grid>
                </Grid>
            </AppBar>
        </div >
    );

}



export default CardPayment;
