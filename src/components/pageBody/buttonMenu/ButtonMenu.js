import React from "react";
import {
  Button,
  Box,
  Grid2
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as MyConstants from './../../../Constants';

const ButtonMenu = ({ setAction }) => {
  // Display the buttons menu. On click set the action in PageBody to the required page
  return (
    <>
      <Box align="center" sx={{
        '& button':
          { m: 1, mr: '10px', fontSize: "20px", width: "300px", justifyContent: "right" }
      }}>
        <Grid2 container margin='auto' justifyContent='center'>
          <Grid2 size={{ xs: 0, md: 8 }}></Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Button variant="contained" endIcon={<ArrowForwardIcon />}
              color="secondary" onClick={() => { setAction(MyConstants.DEPOSIT) }}
              data-testid="DepositButtonMenu" >
              {MyConstants.DEPOSIT}
            </Button>
            <br />
            <Button variant="contained" endIcon={<ArrowForwardIcon />}
              color="secondary" onClick={() => { setAction(MyConstants.WITHDRAW) }}
              data-testid="WithdrawButtonMenu" >
              {MyConstants.WITHDRAW}
            </Button><br />
            <Button variant="contained" endIcon={<ArrowForwardIcon />}
              color="secondary" onClick={() => { setAction(MyConstants.PRINT) }}
              data-testid="PrintButtonMenu" >
              {MyConstants.PRINT}
            </Button><br />
            <Button variant="contained" endIcon={<ArrowForwardIcon />}
              color="secondary" onClick={() => { setAction(MyConstants.EXIT) }}
              data-testid="ExitButtonMenu" >
              {MyConstants.EXIT}
            </Button>

          </Grid2>

        </Grid2>
      </Box>
    </>
  );
}

export default ButtonMenu;