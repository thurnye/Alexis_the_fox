import React from 'react';
import styles from './About.module.css';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Foxy from '../../assets/photosAlexis1/meetFoxxy.jpg'

const services = {
  withDesc : [
    {
      primary: 'AWAKEN THE GODDESS',
      secondary: 'MOVEMENT CLASS',
      description: ''
    },
    {
      primary: 'CACAO CIRCLE',
      secondary: '',
      description: ''
    }
  ],
 withoutDesc: [ {
    primary: 'FOXES UNPLUG',
    secondary: 'RETREATS',
    description: "Alexis hosts women's retreats. She is also available to facilitate at your next retreat!. Click below to join us on one of our retreats or see how Alexis can support your event."
  },
  {
    primary: 'Content Creator',
    secondary: '',
    description: 'Interested in hiring me for speaking, engagements, partnerships or other business inquires'
  }
  ]
}

const About = () => {
  
  return(
  <Box className={styles.About}>
    <CssBaseline />
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, mt: 4, display: {xs: 'none', sm: 'block'}}}>
        <Grid 
        container 
        spacing={{ xs: 1, md: 2 }} 
        columns={{ xs: 12, sm: 12, md: 12 }} 
        sx={{ pb: 3}}
        >
            <Grid item xs={12} sm={6} md={9} sx={{}}>
              <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <HeaderTitle title={'Meet Alexis'}/>
                <Box sx={{textAlign: 'center'}}>
                  <Typography component="div" variant="body2" gutterBottom sx={{mb: 3, px: 3}}>
                    My name is Alexis Ramirez Jackson and I'm a fox of all trades. I'm a Latina, born and raised from New York City. I'm a feminine embodiment movement and cacao facilitator that specializes in trauma, content creator with over 5 million followers, mentor, mother, speaker, writer, creator, dancer, mental health advocate, and fashion designer. Like I said a fox of all trades lol.
                  </Typography>
                  <Typography component="div" variant="body2" gutterBottom sx={{my: 3, px: 3}}>
                    Not many know my story but here it is in a nut shell.l've survived many battles from sexual, physical and mental abuse. I chose not to relive the chapter of my horror but to turn the page and write a new one. And FOX! I'm still writing.
                  </Typography>
                  <Typography component="div" variant="body2" gutterBottom sx={{my: 3, px: 3}}>
                    What I went through and all the continues healing has led me on my mission to let you know that you aren't alone, and your story does matter. I promise to help woman find the courage to speak their truth, reclaim their sexiness and regain their confidence to love themselves.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} sx={{display: {xs: 'none', sm:'block'}}}>
              <Box>
              <CardMedia
                component="img"
                sx={{  }}
                image={Foxy}
                alt="Foxy"
              />
              </Box>
            </Grid>
        </Grid>
      </Box>
      <Box sx={{display: {xs: 'block', sm: 'none'}, px: 3, mb: 8}}>
        <Box sx={{float: 'right', width: '50%', mt: 3}}>
          <CardMedia
            component="img"
            sx={{ width: '100%', mx: 1 }}
            image={Foxy}
            alt="Foxy"
          />
        </Box>
        <Box>
        {/* <Typography component="div" variant="h5" sx={{mt: 3, mb: 1}}>Meet Alexis</Typography> */}
        <HeaderTitle title={'Meet Alexis'}/>

        <Typography component="div" variant="body2" gutterBottom sx={{mb: 3,}}>
          My name is Alexis Ramirez Jackson and I'm a fox of all trades. I'm a Latina, born and raised from New York City. I'm a feminine embodiment movement and cacao facilitator that specializes in trauma, content creator with over 5 million followers, mentor, mother, speaker, writer, creator, dancer, mental health advocate, and fashion designer. Like I said a fox of all trades lol.
          <br/> <br/>        
          Not many know my story but here it is in a nut shell.l've survived many battles from sexual, physical and mental abuse. I chose not to relive the chapter of my horror but to turn the page and write a new one. And FOX! I'm still writing.
          <br/><br/> 
          What I went through and all the continues healing has led me on my mission to let you know that you aren't alone, and your story does matter. I promise to help woman find the courage to speak their truth, reclaim their sexiness and regain their confidence to love themselves.
        </Typography>
        </Box>
      </Box>
    </Container>

    <Box sx={{ flexGrow: 1, position: 'relative', background: '#955B35'}}>
      <Box sx={{ width: 270, position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, background: 'white', p: 0.4,}}>
        <Typography component="div" variant="h4" sx={{
          // px: 2, 
          border: '2px solid #D7D3CA', 
          fontFamily: "Indie Flower, cursive",
          fontWeight: 400,
          fontStyle: 'normal',
          textAlign: 'center'
        }}>Work with Alexis</Typography>
      </Box>
      <Box sx={{flexGrow: 1, py: 3, px: 3}}>
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 12, md: 12 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{flexGrow: 1, py: 3, px: 3}}>
              <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                {services.withDesc.map((el, index) => 
                  <Grid item xs={2} sm={6} key={el.primary}>
                    <Card sx={{ background: '#1E310A', color: 'white', borderRadius: 0  }}>
                      <CardContent sx={{height: 180, display: 'flex', flexDirection: 'column', justifyContent: el.secondary ? 'center' : 'center', alignItems: 'center', py: 3}}>
                        <Typography variant="h5" component="div" 
                        sx={{ 
                          width: {xs: 'initial', md: 170},
                          textAlign: 'center',
                          fontSize: {xs: '1rem', sm:'1.5rem'},
                          fontFamily:'monospace', fontWeight: 700,
                          color:'#cfcfcf' 
                        }}
                          >
                            {el.primary.toUpperCase()}
                          </Typography>
                        {el.secondary && <Typography variant="h6" component="div" 
                        sx={{ 
                          textAlign: 'center', 
                          mt: 2,
                          fontSize: {xs: '0.8rem', sm:'1.2rem'},
                          fontFamily:'monospace', fontWeight: 700,
                          color:'#cfcfcf'  
                          }}
                          >
                          {el.secondary}
                          </Typography>
                        }
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                <Grid item xs={12} sm={12}>
                  <Box sx={{width: 'inherit'}}>
                    <Typography variant="caption" component="div" sx={{color: 'white', fontFamily:'monospace', fontWeight: 700 }}>
                      EXPLORE INDIVIDUAL OR GROUP SESSIONS WITH ALEXIS FROM CACAO CIRCLES TO SENSUAL MOVEMENT CLASSES. EACH SESSION IS DESIGNED WITH YOUR HIGHEST INTENIONS AT THE CENTER.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box> 
            
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{flexGrow: 1, py: 3, px: 3}}>
              <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                {services.withoutDesc.map((el, index) => 
                 <Grid item xs={2} sm={6} key={el.primary}>
                 <Card sx={{ background: '#1E310A', color: 'white', borderRadius: 0  }}>
                   <CardContent sx={{height: 180, display: 'flex', flexDirection: 'column', justifyContent: el.secondary ? 'center' : 'center', alignItems: 'center', py: 3}}>
                     <Typography 
                     variant="h5" 
                     component="div" 
                     sx={{
                      width: {xs: 120, md: 170}, 
                      textAlign: 'center',
                      fontSize: {xs: '1rem', sm:'1.5rem'},
                      fontFamily:'monospace', fontWeight: 700,
                      color:'#cfcfcf'  
                      }}
                      >
                        {el.primary.toUpperCase()}
                      </Typography>
                     {el.secondary && <Typography variant="h6" component="div" 
                     sx={{
                      width: 170, 
                      textAlign: 'center',
                      mt: 2,
                      fontSize: {xs: '0.8rem', sm:'1.2rem'},
                      fontFamily:'monospace', fontWeight: 700 ,
                      color:'#cfcfcf' 
                      }}>{el.secondary}</Typography>}
                   </CardContent>
                 </Card>
               </Grid>
                )}
                {services.withoutDesc.map((el, index) => 
                   <Grid item xs={2} sm={6}>
                   <Box sx={{width: 'inherit',}}>
                     <Typography variant="caption" component="div" sx={{color: 'white', fontFamily:'monospace', fontWeight: 700 }}>{el.description.toUpperCase()}</Typography>
                   </Box>
                 </Grid>
                )}
              </Grid>
            </Box> 
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Box>
)};

export default About;
