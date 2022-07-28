import React from 'react';
// 
import { Link } from 'react-router-dom';
// 
import HomeLayout from '../components/Layout/Home';
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
import ExpertIcon from "../assets/images/vector/file-invoice.svg";
import CalenderIcon from "../assets/images/vector/calender.svg";
import UsersIcon from "../assets/images/vector/users.svg";
import ChoiceIcon from "../assets/images/vector/choice.svg";
import AccessIcon from "../assets/images/vector/access.svg";
// images
import HeroImage from "../assets/images/hero/header-pic-cropped.png";
import LearningImage from "../assets/images/home/learning.png";
import ELearningImage from "../assets/images/home/e-learning.png";
import StudentImage from "../assets/images/home/student.png";
import AssessmentImage from "../assets/images/home/assessment.png";

const CardClipPath = "polygon(92.32051% 40%, 93.79385% 43.1596%, 94.69616% 46.52704%, 95% 50%, 94.69616% 53.47296%, 93.79385% 56.8404%, 92.32051% 60%, 79.82051% 81.65064%, 77.82089% 84.50639%, 75.35575% 86.97152%, 72.5% 88.97114%, 69.3404% 90.44449%, 65.97296% 91.34679%, 62.5% 91.65064%, 37.5% 91.65064%, 34.02704% 91.34679%, 30.6596% 90.44449%, 27.5% 88.97114%, 24.64425% 86.97152%, 22.17911% 84.50639%, 20.17949% 81.65064%, 7.67949% 60%, 6.20615% 56.8404%, 5.30384% 53.47296%, 5% 50%, 5.30384% 46.52704%, 6.20615% 43.1596%, 7.67949% 40%, 20.17949% 18.34936%, 22.17911% 15.49361%, 24.64425% 13.02848%, 27.5% 11.02886%, 30.6596% 9.55551%, 34.02704% 8.65321%, 37.5% 8.34936%, 62.5% 8.34936%, 65.97296% 8.65321%, 69.3404% 9.55551%, 72.5% 11.02886%, 75.35575% 13.02848%, 77.82089% 15.49361%, 79.82051% 18.34936%)";

function Home() {
    const theme = useTheme();
    return (
        <HomeLayout>
            <Box component="section" sx={{ pt: 4, pb: 4 }} className='hero-section'>
                <Container maxWidth="lg">
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ mb: 3}} component="h1" variant="h3" color="secondary">
                                <Typography component="span" fontWeight={'inherit'} variant="h3" color="primary">Welcome</Typography> to <br/>
                                Gruen Intl School
                            </Typography>
                            <Typography sx={{ maxWidth: '450px', mb: 3, fontSize: 24 }} color={blueGrey['600']} paragraph>
                                We are the best when it comes online
                                course content and 
                            </Typography>
                            <Button component={Link} to="/#get-started" sx={{ boxShadow: 0, borderRadius: '40px', padding: '10px 34px', fontSize: '16px'}}  size="lg" variant="contained">
                                Get Started
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                            <img
                                src={HeroImage}
                                alt="Contentionary"
                                height="auto"
                                width="80%"
                                loading="lazy"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="section" sx={{ pt: 4 }} className=''>
                <Container maxWidth="lg">
                    <Typography sx={{ mb: 3}} textAlign="center" component="h2" variant="h4" color="secondary">
                        Why we are the<br/>
                        <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">
                            Best Online Academy
                        </Typography> 
                    </Typography>
                    <Typography paragraph textAlign="center" color={blueGrey['600']} sx={{ maxWidth: '680px', mb: 5, mx: 'auto', fontSize: 20 }}>
                        Students across the country uses our academy to grow and get exposed to relevant IT and soft skills.
                    </Typography> 
                    <Grid container spacing={2} sx={{ mt: 10 }}>
                        <Grid item xs={12} md={4} sx={{ mb: 5 }}>
                            <Card variant="outlined" sx={{ borderRadius: "20px", position: 'relative', overflow: "initial", height: "100%"}}>
                                <CardContent sx={{ p: 3 }}>
                                    <Avatar sx={{ 
                                        width: 70, 
                                        height: 70,  
                                        right: '50%', 
                                        top: '-35px', 
                                        bgcolor: 'secondary.alt', 
                                        position: 'absolute', 
                                        transform: "translateX(50%)", 
                                    }}>
                                        <img
                                            src={ExpertIcon}
                                            width="auto"
                                            height="40"
                                            loading="lazy"
                                            alt="Contentionary"
                                        />
                                    </Avatar>
                                    <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                        Taught by experts
                                    </Typography>
                                    <Typography paragraph textAlign="center" color={blueGrey['600']}>
                                        Courses are taught by experts with many years of IT and teaching experience
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ mb: 5 }}>
                            <Card variant="outlined" sx={{ borderRadius: "20px", position: 'relative', overflow: "initial", height: "100%"}}>
                                <CardContent sx={{ p: 3 }}>
                                    <Avatar sx={{ 
                                        width: 70, 
                                        height: 70,  
                                        right: '50%', 
                                        top: '-35px', 
                                        bgcolor: 'primary.main',
                                        position: 'absolute', 
                                        transform: "translateX(50%)", 
                                    }}>
                                        <img
                                            src={CalenderIcon}
                                            width="auto"
                                            height="40"
                                            loading="lazy"
                                            alt="Contentionary"
                                        />
                                    </Avatar>
                                    <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                        Weekend Live reviews
                                    </Typography>
                                    <Typography paragraph textAlign="center" color={blueGrey['600']}>
                                        Live classes to answer and interact with tutors and other learners
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ mb: 5 }}>
                            <Card variant="outlined" sx={{ borderRadius: "20px", position: 'relative', overflow: "initial", height: "100%"}}>
                                <CardContent sx={{ p: 3 }}>
                                    <Avatar sx={{ 
                                        width: 70, 
                                        height: 70,  
                                        right: '50%', 
                                        top: '-35px', 
                                        bgcolor: 'accent.main',
                                        position: 'absolute', 
                                        transform: "translateX(50%)", 
                                    }}>
                                        <img
                                            src={UsersIcon}
                                            width="auto"
                                            height="35"
                                            loading="lazy"
                                            alt="Contentionary"
                                        />
                                    </Avatar>
                                    <Typography component="h5" textAlign="center" color="secondary" sx={{ mb: 3, mt: 3, fontWeight: 500 }}>
                                        Verifiable Certificates
                                    </Typography>
                                    <Typography paragraph textAlign="center" color={blueGrey['600']}>
                                        Access to online clubs to engage with other learners and compete for prizes
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="section" sx={{ py: 4 }} className=''>
                <Container maxWidth="lg">
                     <Grid container spacing={2} sx={{ mt: 10 }}>
                        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                            <Typography sx={{ mb: 3, fontWeight: "500 !important"}} component="h2" variant="h4" color="secondary">
                                <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">Our Students can now learn top IT Skills, </Typography> 
                                at their pace and get certified
                            </Typography>
                            <Typography paragraph sx={{ mb: 3, fontSize: 24 }} color={blueGrey['600']}>
                               Our Academy allows our students to learn industry relevant IT skills, execute real time projects and get certified upon completion of any program.
                            </Typography>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6} order={{ xs: 1, md: 2 }}>
                            <img
                                src={LearningImage}
                                alt="Contentionary"
                                height="auto"
                                width="80%"
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
                        <Button component={Link} to="/#get-started"  sx={{ boxShadow: 0, borderRadius: '40px', padding: '10px 34px', fontSize: '16px'}}  size="lg" color="primary" variant='outlined'>
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
                    <Typography sx={{ fontSize: 20}} paragraph textAlign="center" color={blueGrey['600']}>
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
                            <Grid container spacing={3} sx={{ mt: 4 }} direction="row">
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
                                    <Typography paragraph sx={{ mb: 3, fontSize: 22 }} color={blueGrey['600']}>
                                       Choose a course of interest and subscribe to it.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} sx={{ mt: 3 }} direction="row">
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
                                    <Typography paragraph sx={{ mb: 3, fontSize: 22 }} color={blueGrey['600']}>
                                       Access subscribed course anytime in 365 days
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="section" sx={{ py: 4 }} className=''>
                <Container maxWidth="lg">
                     <Grid container spacing={2} sx={{ mt: 10, alignItems: 'center' }}>
                        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                            <Typography sx={{ mb: 3, fontWeight: "600 !important"}} component="h2" variant="h4" color="secondary">
                                <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary">Get Real-time Practical </Typography> 
                                after every topic thought
                            </Typography>
                            <Typography paragraph sx={{ mb: 3, fontSize: 24 }} color={blueGrey['600']}>
                                After each topic thought, practicals will be given and assessments will be taken before the next topic will be made available automatically.
                            </Typography>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6} order={{ xs: 1, md: 2 }}>
                            <img
                                src={StudentImage}
                                alt="Contentionary"
                                height="auto"
                                width="80%"
                                loading="lazy"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="section" sx={{ py: 4 }} className=''>
                <Container maxWidth="lg">
                     <Grid container spacing={2} sx={{ mt: 10, alignItems: 'center' }}>
                        <Grid item sx={{ textAlign: 'center' }} xs={12} md={6}>
                            <img
                                src={AssessmentImage}
                                alt="Contentionary"
                                height="auto"
                                width="80%"
                                loading="lazy"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ mb: 3, fontWeight: "600 !important"}} component="h2" variant="h4" color="secondary">
                                Assessments, <Typography component="span" fontWeight={'inherit'} variant="h4" color="primary"> Quizzes</Typography>, Tests, Prep Test
                                
                            </Typography>
                            <Typography paragraph sx={{ mb: 3, fontSize: 24 }} color={blueGrey['600']}>
                                Each program have assignments, quizzes, and tests.
                                Student results are automatically graded and certification will be issued for online download.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </HomeLayout>
    )
}

export default Home;
