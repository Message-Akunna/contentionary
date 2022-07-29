import React from 'react';
// 
import { Link } from 'react-router-dom';
// 
import { 
    Box,
    Button,
    Container, 
    Typography,
} from '@mui/material';
// 
import ContentionaryLogo from "../../../assets/images/logo/logo.svg";

function Footer() {
  return (
    <Box component="footer" sx={{ py: 4,  bgcolor: 'secondary.dark' }} className='footer'>
        <Container maxWidth="xl">
            <Box sx={{pb: 4, display: { xs: 'flex', justifyContent: 'space-between',  alignItems: 'center', flexWrap: 'wrap'}}}>
                <img
                    src={ContentionaryLogo}
                    alt="Contentionary"
                    height="40"
                    width="auto"
                    loading="lazy"
                />
                <Button component={Link} to="/#contact-us" sx={{ boxShadow: 0, color: 'white', borderRadius: '40px', padding: '8px 30px', fontSize: '16px', display: {xs: 'none', md: 'block'}}}  size="lg" variant="plain">
                    Contact Us
                </Button>
            </Box>
            <Typography paragraph textAlign={'center'} sx={{ mb: 0, color: 'secondary.light' }}>
                Built with Contentionary
            </Typography>
            <Typography paragraph textAlign={'center'} sx={{ mb: 0, color: 'secondary.light' }}>
                © 2022 Contentionary. All rights reserved 
            </Typography>

        </Container>
    </Box>
  )
}

export default Footer;
