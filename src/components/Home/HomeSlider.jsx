import React, { useState } from "react";
// 
import { Link } from 'react-router-dom';
// 
import {
    Box,
    Grid,
    Card,
    Avatar,
    useTheme,
    Container,
    Typography,
    CardContent,
    useMediaQuery,
} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import { blueGrey } from '@mui/material/colors';
// icons
import UsersIcon from "../../assets/images/vector/users.svg";
import CalenderIcon from "../../assets/images/vector/calender.svg";
import ExpertIcon from "../../assets/images/vector/file-invoice.svg";
// images
import UsersWrapImage from "../../assets/images/home/users-wrap.svg";
import TaughtWrapImage from "../../assets/images/home/taught-wrap.svg";
import ReviewWrapImage from "../../assets/images/home/review-wrap.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const HomeSlider = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.up("md"));
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <React.Fragment>
            <Box component="section" sx={{ py: 4 }} className=''>
                <Container maxWidth="lg">
                    <Typography sx={{ mb: 3}} textAlign="center" component="h2" variant="h4" color="secondary">
                        Why we are the<br/>
                        <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">
                            Best Online Academy
                        </Typography> 
                    </Typography>
                    <Typography paragraph textAlign="center" color={blueGrey['600']} sx={{ maxWidth: '680px', mb: 5, mx: 'auto', fontSize: "1.25rem" }}>
                        Students across the country uses our academy to grow and get exposed to relevant IT and soft skills.
                    </Typography> 
                    {isMatch ? (
                        <Grid container spacing={2} sx={{ mt: 10 }}>
                            <Grid item xs={12} md={4} sx={{ mb: 18 }}>
                                <Card variant="outlined" sx={{ 
                                    border: 0,
                                    height: "100%", 
                                    overflow: "initial", 
                                    position: "relative",
                                    }}>
                                    <Box sx={{ 
                                        zIndex: 0,
                                        inset: "0 -28% -36% -36%",
                                        position: 'absolute',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: "100% 340px !important",
                                        backgroundImage: `url(${TaughtWrapImage})`,
                                    }}></Box>
                                    <CardContent sx={{ px: 6, zIndex: 1, position: "relative" }}>
                                        <Box sx={{ display: {xs: 'flex', justifyContent: 'center'} }}>
                                            <Avatar sx={{ 
                                                width: 70, 
                                                height: 70,  
                                                bgcolor: 'secondary.alt', 
                                            }}>
                                                <img
                                                    src={ExpertIcon}
                                                    width="auto"
                                                    height="40"
                                                    loading="lazy"
                                                    alt="Contentionary"
                                                />
                                            </Avatar>
                                        </Box>
                                        <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                            Taught by experts
                                        </Typography>
                                        <Typography paragraph textAlign="center" sx={{ maxWidth: "240px", mx: "auto"  }} color={blueGrey['600']}>
                                            Courses are taught by experts with many years of IT and teaching experience
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ mb: 18 }}>
                                <Card variant="outlined" sx={{ 
                                    border: 0,
                                    height: "100%", 
                                    overflow: "initial", 
                                    position: "relative",
                                    }}>
                                    <Box sx={{ 
                                        zIndex: 0,
                                        inset: "14% -34% -48% -36%",
                                        position: 'absolute',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: "100% 320px !important",
                                        backgroundImage: `url(${ReviewWrapImage})`,
                                    }}></Box>
                                    <CardContent sx={{ px: 6, zIndex: 1, position: "relative" }}>
                                        <Box sx={{ display: {xs: 'flex', justifyContent: 'center'} }}>
                                            <Avatar sx={{ 
                                                width: 70, 
                                                height: 70,  
                                                bgcolor: 'primary.main', 
                                            }}>
                                                <img
                                                    src={CalenderIcon}
                                                    width="auto"
                                                    height="40"
                                                    loading="lazy"
                                                    alt="Contentionary"
                                                />
                                            </Avatar>
                                        </Box>
                                        <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                            Weekend Live reviews
                                        </Typography>
                                        <Typography paragraph textAlign="center" sx={{ maxWidth: "240px", mx: "auto"  }} color={blueGrey['600']}>
                                            Live classes to answer and interact with tutors and other learners
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ mb: 12 }}>
                                <Card variant="outlined" sx={{ 
                                    border: 0,
                                    height: "100%", 
                                    overflow: "initial", 
                                    position: "relative",
                                    }}>
                                    <Box sx={{ 
                                        zIndex: 0,
                                        inset: "0 -20% -36% 0%",
                                        position: 'absolute',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: "90% 340px !important",
                                        backgroundImage: `url(${UsersWrapImage})`,
                                    }}></Box>
                                    <CardContent sx={{ px: 6, zIndex: 1, position: "relative" }}>
                                        <Box sx={{ display: {xs: 'flex', justifyContent: 'center'} }}>
                                            <Avatar sx={{ 
                                                width: 70, 
                                                height: 70,  
                                                bgcolor: 'accent.main', 
                                            }}>
                                                <img
                                                    src={UsersIcon}
                                                    width="auto"
                                                    height="35"
                                                    loading="lazy"
                                                    alt="Contentionary"
                                                />
                                            </Avatar>
                                        </Box>
                                        <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                            Verifiable Certificates
                                        </Typography>
                                        <Typography paragraph textAlign="center" sx={{ maxWidth: "240px", mx: "auto"  }} color={blueGrey['600']}>
                                            Access to online clubs to engage with other learners and compete for prizes
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    ) : (
                        <>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents>
                                <Box sx={{ mb: 18, maxWidth: 320, mx: 'auto', overflowX: 'clip' }}>
                                    <Card variant="outlined" sx={{ 
                                        border: 0,
                                        height: "100%", 
                                        overflow: "initial", 
                                        position: "relative",
                                        }}>
                                        <Box sx={{ 
                                            zIndex: 0,
                                            inset: "0 -28% -36% -36%",
                                            position: 'absolute',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: "100% 340px !important",
                                            backgroundImage: `url(${TaughtWrapImage})`,
                                        }}></Box>
                                        <CardContent sx={{ px: 6, zIndex: 1, position: "relative" }}>
                                            <Box sx={{ display: {xs: 'flex', justifyContent: 'center'} }}>
                                                <Avatar sx={{ 
                                                    width: 70, 
                                                    height: 70,  
                                                    bgcolor: 'secondary.alt', 
                                                }}>
                                                    <img
                                                        src={ExpertIcon}
                                                        width="auto"
                                                        height="40"
                                                        loading="lazy"
                                                        alt="Contentionary"
                                                    />
                                                </Avatar>
                                            </Box>
                                            <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                                Taught by experts
                                            </Typography>
                                            <Typography paragraph textAlign="center" sx={{ maxWidth: "240px", mx: "auto"  }} color={blueGrey['600']}>
                                                Courses are taught by experts with many years of IT and teaching experience
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box sx={{ mb: 18, maxWidth: 320, mx: 'auto', overflowX: 'clip' }}>
                                    <Card variant="outlined" sx={{ 
                                        border: 0,
                                        height: "100%", 
                                        overflow: "initial", 
                                        position: "relative", }}>
                                        <Box sx={{ 
                                            zIndex: 0,
                                            inset: "14% -34% -48% -36%",
                                            position: 'absolute',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: "100% 320px !important",
                                            backgroundImage: `url(${ReviewWrapImage})`,
                                        }}></Box>
                                        <CardContent sx={{ px: 6, zIndex: 1, position: "relative" }}>
                                            <Box sx={{ display: {xs: 'flex', justifyContent: 'center'} }}>
                                                <Avatar sx={{ 
                                                    width: 70, 
                                                    height: 70,  
                                                    bgcolor: 'primary.main', 
                                                }}>
                                                    <img
                                                        src={CalenderIcon}
                                                        width="auto"
                                                        height="40"
                                                        loading="lazy"
                                                        alt="Contentionary"
                                                    />
                                                </Avatar>
                                            </Box>
                                            <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                                Weekend Live reviews
                                            </Typography>
                                            <Typography paragraph textAlign="center" sx={{ maxWidth: "240px", mx: "auto"  }} color={blueGrey['600']}>
                                                Live classes to answer and interact with tutors and other learners
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box sx={{ mb: 18, maxWidth: 320, mx: 'auto', overflowX: 'clip' }}>
                                    <Card variant="outlined" sx={{ 
                                        border: 0,
                                        height: "100%", 
                                        overflow: "initial", 
                                        position: "relative",
                                        }}>
                                        <Box sx={{ 
                                            zIndex: 0,
                                            inset: "0 -20% -36% 0%",
                                            position: 'absolute',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: "90% 340px !important",
                                            backgroundImage: `url(${UsersWrapImage})`,
                                        }}></Box>
                                        <CardContent sx={{ px: 6, zIndex: 1, position: "relative" }}>
                                            <Box sx={{ display: {xs: 'flex', justifyContent: 'center'} }}>
                                                <Avatar sx={{ 
                                                    width: 70, 
                                                    height: 70,  
                                                    bgcolor: 'accent.main', 
                                                }}>
                                                    <img
                                                        src={UsersIcon}
                                                        width="auto"
                                                        height="35"
                                                        loading="lazy"
                                                        alt="Contentionary"
                                                    />
                                                </Avatar>
                                            </Box>
                                            <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                                Verifiable Certificates
                                            </Typography>
                                            <Typography paragraph textAlign="center" sx={{ maxWidth: "240px", mx: "auto"  }} color={blueGrey['600']}>
                                                Access to online clubs to engage with other learners and compete for prizes
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                sx={{ justifyContent: 'center' }}
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                            />
                        </>
                    )}
                </Container>
            </Box>
        </React.Fragment>
    );
    };

export default HomeSlider;