import { Typography, TextField, InputAdornment, Button, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { React, useState } from "react";
import * as MyConstants from './../../../Constants';

const WithdrawPage = ({ setAction, handleTransaction }) => {
  // store amount entered in local state before passing to parent
  const [amountEntered, setAmountEntered] = useState('');
  return (
    <>
      <Box sx={{ minHeight: [350, 350, 200], justifyContent: 'center' }}>
        <Typography sx={{ mt: [10, 10, 0], mb: '10px', fontSize: ['24px', '24px', '28px'] }}> 
          {MyConstants.WITHDRAW_PAGE_TITLE}</Typography>
        <div >
          {/* Max length allowed is 5
              Only Numbers allowed */}
          <TextField
            required
            id="depositAmt"
            label="Amount in SGD"
            defaultValue="0"
            variant="outlined"
            value={amountEntered}
            onChange={(event) => {
              setAmountEntered(!Number.isNaN(Number(event.target.value)) ? Number(event.target.value) : amountEntered)
            }}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              },
              htmlInput: { maxLength: 5 }
            }}
            sx={{ mb: '40px' }}
          />
          <br />
           {/* Proceed button is disabled if the amount is 0 */}
          <Button variant="contained" endIcon={<ArrowForwardIcon />} color="secondary"
            disabled={amountEntered > 0 ? false : true}
            onClick={() => { setAction(MyConstants.WITHDRAW_THANK); handleTransaction(amountEntered); }}>
            Proceed
          </Button>
        </div>
      </Box>
    </>
  );
}

export default WithdrawPage;