import React from 'react';
import PropTypes from 'prop-types';
import styles from './Podcast.module.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import shopImage1 from '../../assets/foxxyIMGSHOP/podcastIMG.png';
import shopImage2 from '../../assets/foxxyIMGSHOP/podcastIMG2.png';
import shopImage3 from '../../assets/foxxyIMGSHOP/YOUTUBEfox.png';
import shopImage4 from '../../assets/foxxyIMGSHOP/comingSoon.png';
import shopImage5 from '../../assets/photosAlexis2/image_6483441 (7).jpg';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Podcast = () => (
  <div className={styles.Podcast}>
    <Container maxWidth="lg">
      {/* <Box sx={{height:'70vh',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="h3" gutterBottom>
        <CardMedia
                component="img"
                sx={{ 
                  width: {xs: '100%', sm: 300},
                }}
                image={shopImage5}
                alt="foxappeal"
              />
    Coming Soon...
  </Typography>
      </Box> */}
      {/* <CardMedia>
  <Box sx={{ position: 'relative' }}>
    <CardMedia
      component="img"
      height="800"
      image={shopImage5}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: 100,
        // left: 100,
        // center:100,
        textAlign:'center',
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.54)',
        color: 'white',
        padding: '0px',
      }}
    >
      <Typography variant="h5">Coming Soon...</Typography>
      <Typography variant="body2">Summer 2024</Typography>
    </Box>
  </Box>
 
</CardMedia> */}








      <Box sx={{ flexGrow: 1, mt:12 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{display:'flex', alignItems:"center", justifyContent:"center"}}>
              <CardMedia
                component="img"
                sx={{ 
                  width: {xs: '100%', sm: 300},
                }}
                image={shopImage1}
                alt="FoxyDesk"
              />
            </Box>
        
          </Grid>
          <Grid item xs={12} md={6} >
            <Box sx={{textAlign:'center', my:{xs:3, lg:'initial'}}}>
              <Typography>
                WELCOME TO MY VLOG JOURNAL. HERE I WILL SHARE PARTS OF MY LIFE, FROM MY DAILY ROUTINES TO MY INNER THOUGHTS. 
              </Typography>
              <Link href="https://www.youtube.com/channel/UCAABQ1cbiVoPHxE-vHk_KKA">
                <CardMedia
                  component="img"
                    sx={{ my:3,
                      width: 300
                    }}
                    image={shopImage3}
                    alt="FoxyYouTube"
                  />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, mt:12 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>      
          <Grid item xs={12} md={6} sx={{display:'flex', alignItems:"center", justifyContent:"center"}}>
            <Box sx={{display:'flex', alignItems:"center", justifyContent:"center"}}>
            <CardMedia
                component="img"
                sx={{ 
                  width: {xs: 200, sm: 300},}}
                image={shopImage4}
                alt="ComingSoon"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} >
            <Box sx={{textAlign:'center', my:{xs:3, lg:'initial'}}}>
              <CardMedia
                component="img"
                sx={{ width: {xs: '100%', sm: 300}}}
                image={shopImage2}
                alt="FoxyOnAir"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </div>
);

Podcast.propTypes = {};

Podcast.defaultProps = {};

export default Podcast;
