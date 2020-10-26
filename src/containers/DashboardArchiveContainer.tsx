
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardMedia, Divider, Fab, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import { useRouter } from 'next/router';
import MerchantName from '../component/MerchantName';
import { DescriptionText, MainText, SubText } from '../consts/const';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArchiveIcon from '@material-ui/icons/Archive';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import moment from 'moment';

let myItems = [
    { id: 0, Merchant: 'Terminal 21', Participants: 6, DeliveryDate: new Date('2020-10-18T21:12:54'), OrderAmount: 2 },
    { id: 1, Merchant: 'Tesco Lotus', Participants: 7, DeliveryDate: new Date('2020-11-18T21:12:54'), OrderAmount: 3 },
    { id: 2, Merchant: 'The Mall', Participants: 3, DeliveryDate: new Date('2020-12-18T21:11:59'), OrderAmount: 4 },
];


function DashboardArchiveContainer() {

    const { width, height } = useWindowSize()
    const router = useRouter()
    const [myItemState, setMyItemState] = useState(myItems);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        if (myItemState) {

        }
    }, [myItemState]);

    const _pushPage = (pagename) => {
        router.push('/' + pagename)
    }


    return (
        <div>

            <Grid container direction="row" justify="space-around"
                alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <Grid item lg={3} xl={3} md={3} sm={3} xs={3} style={{ textAlign: 'center' }}>
                    <Fab onClick={()=>_pushPage('dashboard')} style={{ margin: 'auto 12%', color: 'white', textAlign: 'center', }} size="small" color="primary"><ArrowBackIcon /></Fab>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6} >
                    <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Archive</Typography>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={3} xs={3} style={{ textAlign: 'center' }} />
            </Grid>

            {myItemState && myItemState.map((groupList, index: number) => (
                <Accordion key={index} onChange={handleChange(groupList.id)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" >
                            <Grid item xs={6} style={{ margin: '0 auto' }}>
                                <Typography >Merchant:</Typography>
                                <Typography >{groupList.Merchant}</Typography>
                            </Grid>
                            <Grid item xs={6} style={{ margin: '0 auto' }}>
                                <Typography >Date:</Typography>
                                <Typography >{moment(groupList.DeliveryDate).format("Do/MMM/YY")}</Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" >
                            <Grid item xs={4} style={{ margin: '0 auto' }}>
                                <Typography >Order Amount:{groupList.OrderAmount}</Typography>

                            </Grid>
                            <Grid item xs={4} style={{ margin: '0 auto' }}>
                                <Typography >Participants:{groupList.Participants}</Typography>
                            </Grid>
                            <Fab color="primary" variant='extended'>COPY</Fab>
                        </Grid>

                    </AccordionDetails>
                </Accordion>
            ))}

        </div >
    );

}



export default DashboardArchiveContainer;
