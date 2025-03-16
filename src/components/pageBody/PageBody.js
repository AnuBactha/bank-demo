import { React, useState, useEffect } from "react";
import ButtonMenu from "./buttonMenu/ButtonMenu";
import DepositPage from "./depositPage/DepositPage";
import WithdrawPage from "./withdrawPage/WithdrawPage";
import PrintStmtPage from "./printStmtPage/PrintStmtPage";
import { Box, IconButton, Typography } from "@mui/material";
import ThankYouPage from "./thankYouPage/ThankYouPage";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import * as MyConstants from './../../Constants';

// This is the object used to store info about each deposit/withdraw
class TransactionRecord {
  constructor(amount, balance, dateStr) {
    this.amount = amount;
    this.balance = balance;
    this.dateStr = dateStr;
  }
}

const PageBody = () => {
// Action - used to store the name of the page that is displayed
  const [action, setAction] = useState(MyConstants.INITIAL);
// Amount - used to store amount that was last deposited/withdrawn  
  const [amount, setAmount] = useState(0);
// transactions - Array used to store all the deposit/witdraw records
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Upon exit, reset all the state values to initial state
    if (action === MyConstants.EXIT) {
      setAmount(0);
      setTransactions([]);
    }
  }, [action]);

  function handleDeposit(value) {
    // set amount that was deposited and add the record to the transactions array
    setAmount(value);
    let balance = 0;
    if (transactions !== null && transactions.length > 0) {
      balance = transactions[transactions.length - 1].balance;
    }
    let newRecord = new TransactionRecord(value, (balance + value), getTodayDate());
    setTransactions([...transactions, newRecord]);
    console.log('transactions = ', transactions);
  }
  function handleWithdraw(value) {
    // set amount that was withdrawn and add the record to the transactions array
    setAmount(value);
    let balance = 0;
    if (transactions !== null && transactions.length > 0) {
      balance = transactions[transactions.length - 1].balance;
    }
    let newRecord = new TransactionRecord('-' + value, (balance - value), getTodayDate());
    setTransactions([...transactions, newRecord]);
    console.log('transactions = ', transactions);
  }
  function getTodayDate() {
    // Format date to required format
    let currentdate = new Date();
    return currentdate.getDate() + " "
      + (currentdate.toLocaleString('default', { month: 'short' })) + " "
      + currentdate.getFullYear() + " "
      + currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
  }

  return (
    <>
      {action === MyConstants.INITIAL ?
        <>
          {/* Show the subtext and buttons menu for the initial screen */} 
          <Typography variant="body1" sx={{ mb: ['5px', '5px', '10px'] }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <ButtonMenu setAction={setAction} />
        </>
        :
        <Box sx={{
          backgroundColor: 'rgba(255, 255, 255, .3)',
          padding: ['20px', '20px', '50px'],
          borderRadius: 2,
          '& button': { fontSize: [20, 20, 14] }
        }} >

          <Box align='center' sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            backgroundColor: 'white',
            paddingBottom: ['20px', '20px', '30px']
          }}>
            <IconButton aria-label="search" color="secondary"
              style={{ marginRight: 'auto', display: action === MyConstants.EXIT ? 'none' : undefined }}
              onClick={() => { setAction(MyConstants.INITIAL) }} >
              <ArrowBackRoundedIcon />
            </IconButton>
            {/* Display the component based on the action value to render the page */}
            {action === MyConstants.DEPOSIT ?
              <DepositPage setAction={setAction} handleTransaction={handleDeposit} /> : action === MyConstants.WITHDRAW ?
                <WithdrawPage setAction={setAction} handleTransaction={handleWithdraw} /> : action === MyConstants.PRINT ?
                  <PrintStmtPage setAction={setAction} transactions={transactions} /> :
                  <ThankYouPage action={action} amount={amount} setAction={setAction} />}

          </Box>
        </Box>
      }
    </>
  );

};
export default PageBody;