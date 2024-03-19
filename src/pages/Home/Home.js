import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Container from '@mui/material/Container';
import Brands from '../../components/Brands/Brands'

const Home = () => {
  const theme = useTheme();

  return(
  <Box className={styles.Home} sx={{
    height: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
    }}
    >
    {/* What is in the cocoa brew*/}
    <CssBaseline />
    <Box sx={{flexGrow: 1, px: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', pt: 3, border: 'none', borderShadow: 'none' }}>
        <Box sx={{ display: 'flex', border: 'none', borderShadow: 'none', alignItems: {xs: 'center', md: 'flex-start'} }}>
          <Box sx={{px: 1}}>
            <CardMedia
                component="img"
                sx={{ 
                  width: {xs: 200, sm: 300},
                  height: {xs: 200, sm: 300},
                  
                  borderRadius: '50%' }}
                image="https://i.pinimg.com/originals/9c/0e/50/9c0e5033d2e9bac33502f0a03732ae9d.jpg"
                alt="Live from space album cover"
              />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 'md' }}>
            <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
              <Typography component="div" variant="h3" sx={{color: '#8e4e32', fontFamily: "Gotu, sans-serif"}}> HEY FOXY THANG!</Typography>
              <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}, display: {xs: 'none', sm: 'block'}, mt: 3, color:'#94998a'}}>
                HOST OF FOXY PODCAST, FEMINIE EMODIMENT FACILTATOR, CACAO HEALER, CONTENT CREATOR, INSPIRATIONAL WRITER AND SPEAKER
              </Typography>
            </CardContent>
            <Box sx={{textAlign: 'center', display: {xs:'none', md: 'block'}}}>
            <Typography variant="body1"  component="div" sx={{fontSize: 15, fontWeight: 'bold', p: 3}}>
              I'm on a mission to let you know that a little bif of MADNESS is ok! I turned my TRAUMA into STRENGTH, and you can too! I help women speak their truth, gain the confidence to love and find themselves again. And let's not forget "YOU'RE NOT ALONE!"
            </Typography>
            <FoxyButton
              fullWidth={false}
              variant="contained" 
              label={"Read More..."} 
              backgroundColor={'#1c310a'}
              hoverBackgroundColor={'#1c310a'}
              height={'initial'}
              sx={{
                width: 150,
                borderRadius: 5,
                fontSize: 15,
                color: 'white',
                fontWeight: 700,
              }}
            />
            </Box>
          </Box>
        </Box>
        {/* Small devices */}
        <Box sx={{textAlign: 'center', display: {xs:'block', md: 'none'}}}>
          <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}, display: {xs: 'block', sm: 'none'}, color:'#94998a'}}>
            HOST OF FOXY PODCAST, FEMINIE EMODIMENT FACILTATOR, CACAO HEALER, CONTENT CREATOR, INSPIRATIONAL WRITER AND SPEAKER
          </Typography>
          <Typography variant="body1"  component="div" sx={{fontSize: 15, fontWeight: 'bold', p: 3}}>
            I'm on a mission to let you know that a little bif of MADNESS is ok! I turned my TRAUMA into STRENGTH, and you can too! I help women speak their truth, gain the confidence to love and find themselves again. And let's not forget "YOU'RE NOT ALONE!"
          </Typography>
          <FoxyButton
            fullWidth={false}
            variant="contained" 
            label={"Read More..."} 
            backgroundColor={'#1c310a'}
            hoverBackgroundColor={'#1c310a'}
            height={'initial'}
            sx={{
              width: 150,
              borderRadius: 5,
              fontSize: 15,
              color: 'white',
              fontWeight: 700,
            }}
          />
        </Box>
      </Box>
    </Box>
      <Brands/>
  </Box>
)};



export default Home;




// HOST OF FOXY PODCAST, FEMINIE EMODIMENT FACILTATOR, CACAO HEALER, CONTENT CREATOR, INSPIRATIONAL WRITER AND SPEAKER

// I'm on a mission to let you know that a little bif of MADNESS is ok! I turned my TRAUMA into STRENGTH, and you can too! I help women speak their truth, gain the confidence to love and find themselves again. And let's not forget "YOU'RE NOT ALONE!"