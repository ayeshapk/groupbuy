import { Button, Divider, Fab, Paper, Typography } from '@material-ui/core';
import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import { useRouter, Router } from 'next/router'
const MainText = '#A60321';
const SubText = '#2678BF';
const ListText = '#D2D2D2';
let items = [
    {
        id: 0, name: 'Demo SHOP', description:'Just softdrink sent every week Storage 2-3 day in chiller',
    },
    {
        id: 1, name: 'Jane Doe Shop', description:'This is Orchard group buy for vegetable. Deliver every Wednesday afternoon',
    },
    {
        id: 2, name: 'KingCrap Shop', description:'Just soap i order in whole sales',
    },
];

// get sum of price prop across all objects in array


function GroupList() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const router = useRouter()

    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);


    const linkToPageGroupShop = () => {
        router.push('/groupshop')
    }


    return (
        <div>
            {
                itemState && itemState.map((shop, index: number) => (
                    <Paper variant="outlined" key={index} style={{ margin: '10px' }} >
                        <div style={{ margin: '10px' }}>

                            <Fab
                                style={{ float: 'right', backgroundColor: '#F26D85', color: 'white' }}
                                variant="extended"
                                size="small"
                                aria-label="add"
                                onClick={linkToPageGroupShop}
                            >
                                JOIN GROUP
                                <ArrowForwardIosIcon fontSize='small' />

                            </Fab>



                            <Typography variant='h6' style={{ color: MainText }}>{shop.name}</Typography>
                            <Typography variant='caption' style={{ color: ListText }}>Description</Typography>
                            <Typography  variant='body2'> {shop.description}</Typography>
                           
                            {/*shop.groupList && <Typography variant='caption' style={{ color: ListText }}>GroupList</Typography>*/}
                            
                            {/*shop.groupList && shop.groupList.map((groupListitem, index: number) => (
                                <div key={index}>
                                    <Typography style={{ color: MainText }} variant='body1'> {groupListitem.group}</Typography>
                                    <Typography variant='caption' style={{ color: ListText }}>Description</Typography>
                                    <Typography  variant='body2'> {groupListitem.description}</Typography>
                                    <Divider style={{margin:'10px'}}/>
                                    {groupListitem.item && groupListitem.item.map((goods, index: number) => (
                                        <div key={index}>
                                            <Typography style={{ color: SubText, textIndent: '20px' }} variant='body2'>{goods.item}</Typography>
                                        </div>))}
                                        }
                                    </div>))*/}
                        </div>
                    </Paper>))}

        </div >
    );

}



export default GroupList;
