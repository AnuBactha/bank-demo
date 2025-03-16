import React from "react";
import {
    Typography,
    Box,
    Divider,
    IconButton,
    Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchRounded';
import bankLogo from './../../assets/images/bankLogo.png';

const Header = () => {
    // To render the top nav bar and company logo and name
    return (
        <>
            <div>
                <Typography align="right" >
                    <Button variant="contained" color="secondary" >{/*} onClick={() => {setAction(MyConstants,INITIAL)}} >*/}
                        Log in / Register
                    </Button>
                    <IconButton aria-label="search" color="secondary">
                        <SearchIcon />
                    </IconButton>
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <img src={bankLogo} height={50} width={50} style={{ padding: '5px', marginTop: '10px' }} alt='logo' />
                    <Typography color="primary" variant="h4" style={{ marginTop: '20px', display: 'inline-flex', verticalAlign: 'bottom', fontWeight: 'bolder' }}  >
                        AwesomeGIC
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'primary', borderWidth: '1px' }} ></Divider>

            </div>
        </>
    );
};

export default Header;