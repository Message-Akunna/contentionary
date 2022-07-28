import React, { useState } from "react";
// 
import { Link } from 'react-router-dom';
// 
import {
    Box,
    Button,
    AppBar,
    Toolbar,
    MenuItem,
    useTheme,
    Container,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { grey } from '@mui/material/colors';
import ContentionaryLogo from "../../../assets/images/logo/logo.svg";
import AppDrawer from "../AppDrawer";

// 
const pages = ["Courses", "Exams", "About Us", "Login"];


const Header = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <AppBar component="nav" sx={{ position: 'relative', background: "white" }} elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <img
                            src={ContentionaryLogo}
                            alt="Contentionary"
                            height="40"
                            width="auto"
                            loading="lazy"
                        />
                    {}
                    {isMatch ? (
                        <AppDrawer />
                    ) : (
                        <>
                            <Box indicatorColor="secondary"
                                textColor="inherit" sx={{ marginLeft: "auto", flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                                {pages.map((page) => (
                                    <MenuItem component={Link} to={`/#${page}`} key={page} sx={{ borderRadius: '40px' }}>
                                        <Typography textAlign="center" color={grey['800']}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Box>
                            <Button component={Link} to="/#signup"  sx={{ marginLeft: "10px", boxShadow: 0, color: 'white', borderRadius: '40px', padding: '8px 30px', fontSize: '14px'}}  size="lg" variant="contained">
                                Sign Up
                            </Button>
                        </>
                    )}
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
    };

export default Header;