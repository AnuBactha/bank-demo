import React from "react";
import {
    Typography,
    Box,
    Divider,
} from '@mui/material';
import bankLogo from './../../assets/images/bankLogo.png';

function Footer() {
    return (
        <div style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            color: 'white',
            textAlign: 'center'
        }}>
            <Divider sx={{
                "&::before, &::after": {
                    borderColor: "white",
                },
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >

                    <img src={bankLogo} height={35} width={35} style={{ padding: '5px' }} alt='logo'/>
                    <span style={{ padding: '5px' }}>
                        <Typography variant="h6">AwesomeGIC
                        </Typography>
                    </span>

                </Box>
            </Divider>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiButton-root': { width: '15ch' },
                    '& .MuiTextField-root': { width: '50ch' }
                }}
            >
                <Typography variant="subtitle2">
                    Link1 | Link2 | Link3 | Link4
                </Typography>
                <Typography variant="subtitle2">
                    Copyright © sample sample sample
                </Typography>
            </Box>
        </div>
    );
}
export default Footer;