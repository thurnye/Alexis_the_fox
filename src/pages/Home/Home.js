import React from 'react';
import styles from './Home.module.css';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import CardContent from '@mui/material/CardContent';
import Brands from '../../components/Brands/Brands'
import foxy from '../../assets/photosAlexis2/foxy.jpg'

const Home = () => {
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
                image={foxy}
                alt="Foxy"
              />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 'md' }}>
            <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
              <Typography component="div" variant="h3" sx={{color: '#8e4e32', fontFamily: "Gotu, sans-serif"}}> HEY FOXY THANG!</Typography>
              <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}, display: {xs: 'none', sm: 'block'}, mt: 3, color:'#94998a'}}>
                HOST OF FOXY PODCAST, FEMININE EMODIMENT FACILTATOR, CACAO HEALER, CONTENT CREATOR, INSPIRATIONAL WRITER AND SPEAKER
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