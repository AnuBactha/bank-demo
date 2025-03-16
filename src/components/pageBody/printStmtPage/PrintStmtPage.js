import { Typography, Button, Divider, Grid2, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as MyConstants from './../../../Constants';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const PrintStmtPage = ({ setAction, transactions }) => {
  return (
    <>
      <Box sx={{ minHeight: [400, 400, 200], justifyContent: 'center' }}>
        <Typography sx={{ mb: '10px', fontSize: ['24px', '24px', '28px'] }}>
          {MyConstants.PRINT_PAGE_TITLE}</Typography>
          {/* Display table only if there are records in the transactions array */}
        {transactions && transactions.length > 0 ?
          <TableContainer component={Paper} sx={{ maxHeight: [300, 300, 200], mb: '20px' }}>
            <Table sx={{ minWidth: [200, 200, 350] }}
              size="small"
              aria-label="simple table"
              stickyHeader>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'secondary' }}>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((row) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.dateStr}
                    </TableCell>
                    <TableCell align="right">{Number(row.amount).toFixed(2)}</TableCell>
                    <TableCell align="right">{Number(row.balance).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          :
          <>
          {/* Display message if there are no records */}
            <AccountBalanceIcon color="secondary" sx={{ margin: 'auto', fontSize: "38px" }} />
            <br />
            <Typography variant="caption">
              There are no transctions in your account.</Typography>
          </>
        }
        {/* Bottom CTA buttons for the print page */}
        <Divider sx={{ mt: ['50px', '50px', '0px'] }}>
          <Typography variant="caption"> {MyConstants.NEXT_MSG}</Typography>
        </Divider>
        <Grid2 container spacing={1} margin='auto' justifyContent='center'>
          <Grid2  size= {{xs: 8, md: 4 }} >
            <Button variant="outlined" endIcon={<ArrowForwardIcon />} color="secondary"
              onClick={() => { setAction(MyConstants.DEPOSIT) }} >
              {MyConstants.DEPOSIT}
            </Button>
          </Grid2>
          <Grid2   size= {{xs: 8, md: 4 }}>
            <Button variant="outlined" endIcon={<ArrowForwardIcon />} color="secondary"
              onClick={() => { setAction(MyConstants.WITHDRAW) }} >
              {MyConstants.WITHDRAW}
            </Button>
          </Grid2>
          <Grid2   size= {{xs: 8, md: 4 }} >
            <Button variant="outlined" endIcon={<ArrowForwardIcon />} color="secondary"
              onClick={() => { setAction(MyConstants.EXIT) }} >
              {MyConstants.EXIT}
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default PrintStmtPage;