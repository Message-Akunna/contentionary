import React from 'react';
// 
import { Link } from 'react-router-dom';
// 
import HomeLayout from '../components/Layout/Home';
// 
import HomeSlider from '../components/Home/HomeSlider';
// 
import { 
    Box,
    Grid,
    Card,
    Stack,
    Button,
    Avatar,
    CardMedia,
    Container, 
    Typography,
    CardActions,
    CardContent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { blueGrey, grey, indigo } from '@mui/material/colors';
// icons
import AccessIcon from "../assets/images/vector/access.svg";
import ChoiceIcon from "../assets/images/vector/choice.svg";
// images
import StudentImage from "../assets/images/home/student.png";
import LearningImage from "../assets/images/home/learning.png";
import ELearningImage from "../assets/images/home/e-learning.png";
import AssessmentImage from "../assets/images/home/assessment.png";
import HeroImage from "../assets/images/hero/header-pic-cropped.png";

function Home() {
    const theme = useTheme();
    return (
        <HomeLayout>
            <Box component="section" sx={{ pt: 4, pb: 4 }} className='hero-section'>
                <Container maxWidth="lg">
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ mb: 3 }} component="h1" variant="h3" color="secondary">
                                <Typography component="span" fontWeight={'inherit'} variant="h3" color="primary">Welcome</Typography> to <br/>
                                Gruen Intl School
                            </Typography>
                            <Typography sx={{ maxWidth: '450px', mb: 3, fontSize: "1.5rem" }} color={blueGrey['600']} paragraph>
                                We are the best when it comes online
                                course content and 
                            </Typography>
                            <Button component={Link} to="/#get-started" sx={{ boxShadow: 0, borderRadius: '40px', padding: '10px 34px', fontSize: '1rem'}}  size="lg" variant="contained">
                                Get Started
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: "center", display: { xs: "none", md: "block"} }}>
                            <img
                                src={HeroImage}
                                alt="Contentionary"
                                height="auto"
                                width="100%"
                                loading="lazy"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* home slider */}
            <HomeSlider/>
            <Box component="section" sx={{ py: 4 }} className='student-learning-section'>
                <Container maxWidth="lg">
                     <Grid container spacing={2} sx={{ mt: 10 }}>
                        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} className="student-learning-text">
                            <Typography sx={{ mb: 3, fontWeight: "500 !important", pl: 4}} component="h2" variant="h4" color="secondary">
                                Our Students can now learn top IT Skills, <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">
                                    at their pace and get certified
                                </Typography> 
                            </Typography>
                            <Typography paragraph sx={{ mb: 3, fontSize: "1.5rem",  pl: 4 }} color={blueGrey['600']}>
                               Our Academy allows our students to learn industry relevant IT skills, execute real time projects and get certified upon completion of any program.
                            </Typography>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center', p: 2 }} xs={12} md={6} order={{ xs: 1, md: 2 }}  className="student-learning-image">
                            <img
                                src={LearningImage}
                                alt="Contentionary"
                                height="auto"
                                width="100%"
                                loading="lazy"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="section" sx={{ py: 5 }} className=''>
                <Container maxWidth="lg">
                    <Typography sx={{ mt: 3}} component="h2" variant="h4" color="secondary">
                        Top <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">
                            Programs
                        </Typography> 
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 5 }}>
                        {
                            Array.from({ length: 4 }).map((_, index) => (
                                <Grid key={`${index}-course-items`} item xs={12} sm={6} md={3} sx={{ mb: 5 }}>
                                    <Card variant="outlined" sx={{ height: "100%"}}>
                                        <CardContent sx={{ paddingBottom: '16px !important' }}>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                image={LearningImage}
                                                alt="green iguana"
                                            />
                                            <Typography className="line-clamp-2" component="h5" variant="h6" color="secondary" sx={{ mb: 1, mt: 2, fontWeight: "500 !important", lineHeight: 1.2, fontFamily: "'Open Sans'" }}>
                                                Mechanical Engineering in UI/UX Design
                                            </Typography>
                                            <Typography paragraph sx={{ mb: 0 }} color={blueGrey['600']}>
                                                Academics
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ borderTop: 1, borderColor: 'grey.200' }}>
                                            <Button component={Link} to="/#course"  size="small" color="secondary" variant='outlined'>
                                                View course
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Box component="div" sx={{ textAlign: 'center' }}>
                        <Button component={Link} to="/#get-started"  sx={{ boxShadow: 0, borderRadius: '40px', padding: '10px 34px', fontSize: '1rem'}}  size="lg" color="primary" variant='outlined'>
                            Get Started
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Box component="section" sx={{ py: 4 }} className=''>
                <Container maxWidth="lg">
                    <Typography sx={{ mt: 3}} textAlign="center" component="h2" variant="h4" color="secondary">
                        Our <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">
                            Features
                        </Typography> 
                    </Typography>
                    <Typography sx={{ fontSize: "1.25rem"}} paragraph textAlign="center" color={blueGrey['600']}>
                        What makes Our Academy Unique
                    </Typography>
                    {/*  order={{ xs: 2, md: 1 }} order={{ xs: 1, md: 2 }} */}
                    <Grid container spacing={2} sx={{ mt: 10, alignItems: 'center' }}>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6}>
                            <img
                                src={ELearningImage}
                                alt="Contentionary"
                                height="auto"
                                width="100%"
                                loading="lazy"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Typography sx={{ mb: 3, fontWeight: "600 !important"}} component="h2" variant="h4" color="secondary">
                                <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary"> Self-Paced </Typography> 
                                Learning, with access for a year
                            </Typography>
                            <Grid container spacing={3} sx={{ mt: 3 }} direction="row">
                                <Grid item xs="auto">
                                    <Avatar sx={{ 
                                        width: 50, 
                                        height: 50,  
                                        boxShadow: "0px 15px 44px rgba(13, 15, 28, 0.12)",
                                        bgcolor: 'white',
                                    }}>
                                        <img
                                            src={ChoiceIcon}
                                            width="auto"
                                            height="24"
                                            loading="lazy"
                                            alt="Contentionary"
                                        />
                                    </Avatar>
                                </Grid>
                                <Grid item xs sx={{ flexGrow: 1 }}>
                                    <Typography paragraph sx={{ mb: 0, fontSize: "1.375rem" }} color={blueGrey['600']}>
                                       Choose a course of interest and subscribe to it.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} sx={{ mt: 2 }} direction="row">
                                <Grid item xs="auto">
                                    <Avatar sx={{ 
                                        width: 50, 
                                        height: 50,  
                                        boxShadow: "0px 15px 44px rgba(13, 15, 28, 0.12)",
                                        bgcolor: 'white',
                                    }}>
                                        <img
                                            src={AccessIcon}
                                            width="auto"
                                            height="24"
                                            loading="lazy"
                                            alt="Contentionary"
                                        />
                                    </Avatar>
                                </Grid>
                                <Grid item xs sx={{ flexGrow: 1 }}>
                                    <Typography paragraph sx={{ mb: 3, fontSize: "1.375rem" }} color={blueGrey['600']}>
                                       Access subscribed course anytime in 365 days
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 10, alignItems: 'center', display: { xs: "none", md: "flex"} }}>
                        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                            <Typography sx={{ mb: 3, fontWeight: "600 !important"}} component="h2" variant="h4" color="secondary">
                                <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">Get Real-time Practical </Typography> 
                                after every topic thought
                            </Typography>
                            <Typography paragraph sx={{ mb: 3, fontSize: "1.5rem" }} color={blueGrey['600']}>
                                After each topic thought, practicals will be given and assessments will be taken before the next topic will be made available automatically.
                            </Typography>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6} order={{ xs: 1, md: 2 }}>
                            <img
                                src={StudentImage}
                                alt="Contentionary"
                                height="auto"
                                width="100%"
                                loading="lazy"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 10, alignItems: 'center', display: { xs: "none", md: "flex"} }}>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6}>
                            <img
                                src={AssessmentImage}
                                alt="Contentionary"
                                height="auto"
                                width="100%"
                                loading="lazy"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ mb: 3, fontWeight: "600 !important"}} component="h2" variant="h4" color="secondary">
                                Assessments, <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary"> Quizzes</Typography>, Tests, Prep Test
                                
                            </Typography>
                            <Typography paragraph sx={{ mb: 3, fontSize: "1.5rem" }} color={blueGrey['600']}>
                                Each program have assignments, quizzes, and tests.
                                Student results are automatically graded and certification will be issued for online download.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component="div" sx={{ textAlign: 'center', display: { xs: "block", md: "none"} }}>
                        <Button component={Link} to="/#features"  sx={{ boxShadow: 0, borderRadius: '40px', padding: '10px 34px', fontSize: '1rem'}}  size="lg" color="primary" variant='outlined'>
                            See more features
                        </Button>
                    </Box>
                </Container>
            </Box>
        </HomeLayout>
    )
}

export default Home;
