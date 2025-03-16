import React from "react";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import { Grid2, Divider, Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as MyConstants from './../../../Constants';

const ThankYouPage = ({ action, amount, setAction }) => {
    const actionPerformed = (action === MyConstants.DEPOSIT_THANK) ?
        MyConstants.DEPOSIT_MSG : MyConstants.WITHDRAW_MSG
    return (
        <>
            <Box sx={{ minHeight: [350, 350, 200], justifyContent: 'center' }}>
                {/* If Exit is clicked, display thank you msg else display Done msg */}
                {action === MyConstants.EXIT ?
                    <>
                        <Typography variant="h5" color="white" sx={{ mt: '50px' }}> I </Typography>
                        <WavingHandOutlinedIcon color="secondary" sx={{ margin: 'auto', fontSize: "38px" }} />
                        <Typography variant="h5">
                            {MyConstants.EXIT_MSG}
                        </Typography>
                        <Typography variant="subtitle" sx={{ mb: '10px' }}>
                            {MyConstants.NICE_DAY}
                        </Typography>
                    </>
                    :
                    <>
                        <CheckCircleOutlineOutlinedIcon color="secondary" sx={{ margin: 'auto', fontSize: "38px", mt: '50px' }} />
                        <Typography variant="h5">
                            {MyConstants.DONE}
                        </Typography>
                        <Typography variant="subtitle" sx={{ mb: '10px' }}>
                            {
                                'S$' + amount + ' has been ' +
                                actionPerformed + ' your account.'
                            }
                        </Typography>
                    </>
                }
                {/* Display CTA buttons for deposit and withdraw msg pages only */}
                {(action === MyConstants.DEPOSIT_THANK || action === MyConstants.WITHDRAW_THANK) ?
                    <>
                        <Divider sx={{ mt: '30px' }}><Typography variant="caption"> {MyConstants.NEXT_MSG}</Typography></Divider>
                        <Grid2 container spacing={1} margin='auto' justifyContent='center'>
                            <Grid2 size={{ xs: 0, md: 1 }} >
                            </Grid2>                            
                            {action === MyConstants.DEPOSIT_THANK ?

                                <></> :
                                <Grid2 size={{ xs: 8, md: 3 }} >
                                    <Button variant="outlined" endIcon={<ArrowForwardIcon />} color="secondary"
                                        onClick={() => { setAction(MyConstants.DEPOSIT) }} >
                                        {MyConstants.DEPOSIT}
                                    </Button>
                                </Grid2>
                            }
                            {action === MyConstants.WITHDRAW_THANK ?
                                <></> :
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <Button variant="outlined" endIcon={<ArrowForwardIcon />} color="secondary"
                                        onClick={() => { setAction(MyConstants.WITHDRAW) }} >
                                        {MyConstants.WITHDRAW}
                                    </Button>
                                </Grid2>
                            }
                            <Grid2 size={{ xs: 12, md: 3 }}  >
                                <Button variant="outlined" endIcon={<ArrowForwardIcon />} color="secondary"
                                    onClick={() => { setAction(MyConstants.PRINT) }}>
                                    {MyConstants.PRINT}
                                </Button>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <Button variant="outlined" endIcon={<ArrowForwardIcon />} color="secondary"
                                    onClick={() => { setAction(MyConstants.EXIT) }} >
                                    {MyConstants.EXIT}
                                </Button>
                            </Grid2>
                            <Grid2 size={{ xs: 0, md: 1 }} >
                            </Grid2>        
                        </Grid2>
                    </> :
                    <></>}
            </Box>
        </>
    );
}

export default ThankYouPage;