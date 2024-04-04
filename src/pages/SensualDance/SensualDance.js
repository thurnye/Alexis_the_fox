import React from 'react';
import styles from './SensualDance.module.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import SensualDanceWorkshop from '../../assets/photosAlexis1/Sensual-dance.jpg'
import coffeeBeans from '../../assets/photosAlexis1/coffee.jpeg'
import FoxyButton from '../../components/FoxyButton/FoxyButton';

const benefits = [
  "It helps to strengthen the body, to make it fit and healthy",
  "It removes blockages and inhibitions",
  "It helps us to open our hearts, feel more confident and heal emotionally",
  "It helps us to own our sexy, our body, our beauty and own the goddess within",
  "And it is extremely fun! Sensual dance brings the best out of us, and lifts up our moods"
];

const workshopBenefits = [
  "Improve your self-confidence and dignity",
  "Awaken your erotic charisma and magnetic power",
  "Cherish and love yourself through dance",
  "Remove tensions, strengthen your body and find natural healing and regeneration through playful movements",
  "Discover how dance will liberate you and improve your sexuality",
  "Admiring and transfiguring other women as a tool to heal the bond to the feminine nature",
  "Supportive sisterhood-embrace and embraced by the feminine",
  "Re-discover the goddess within you!"
]

const SensualDance = () => (
  <div className={styles.SensualDance}>
    <Container maxWidth="xl">
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ 
          background: '#1E310A', 
          color: 'white', 
          px: {xs: 3, md: 5},
          pt: {xs: 3, md: 5},
          pb: 22
          }}>
          <Typography component="div" variant="h3" sx={{ fontFamily: "Gotu, sans-serif", textAlign: 'center', display: {xs:'none', lg: 'block'}}}> Awaken the Goddess</Typography>
          <Box sx={{flexGrow: 1, px: {md: 2}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', pt: 3, border: 'none', borderShadow: 'none' }}>
      
              <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, border: 'none', borderShadow: 'none', alignItems: {xs: 'center', md: 'flex-start'} }}>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 'md' }}>
                  <CardContent sx={{ flex: '1 0 auto'}}>
                    <Typography component="div" variant="h3" sx={{ fontFamily: "Gotu, sans-serif", textAlign: 'center', display: {xs:'block', lg: 'none'}}}> Awaken the Goddess</Typography>
                  </CardContent>

                  <Box sx={{textAlign: 'start', display: {xs:'none', md: 'block'}}}>
                    <Typography component="div" variant="caption" gutterBottom sx={{ mb: 2, px: 1}}>
                      The Feminine embodiment movement workshops also known as "Awaken the Goddess" are through sensual dance. We focus on may types of music but especially Bachata. It's an amazing way to reconnect to ourselves and our feminine nature, creating  in a natural and playful way to balance between heart, body mind and soul. Sensual dance, filled with devotuional states and uplifting emotiuons, becomes an extraordinary tool for rediscovering our femininity in a sublime way. Consicious, sensual movement has a deeply harmonizing effect on many levels:
                    </Typography>
                    {benefits.map((el) => <Typography key={el} component="div" variant="caption" gutterBottom sx={{px: 1}}>*{el}</Typography>)}
                  </Box>
                </Box>
                <Box sx={{px: 1}}>
                  <CardMedia
                      component="img"
                      sx={{ 
                        width: {xs: 200, sm: 300},
                        height: {xs: 200, sm: 300},
                        
                        borderRadius: '50%' }}
                      image={SensualDanceWorkshop}
                      alt="Foxy"
                    />
                </Box>
              </Box>
      
              {/* Small devices */}
              <Box sx={{textAlign: 'start', display: {xs:'block', md: 'none'}}}>
                <Typography variant="body1"  sx={{my: 3, fontSize: {xs: 12, md: 16}, display: {xs: 'block', md: 'none'}}}>
                The Feminine embodiment movement workshops also known as "Awaken the Goddess" are through sensual dance. We focus on may types of music but especially Bachata. It's an amazing way to reconnect to ourselves and our feminine nature, creating  in a natural and playful way to balance between heart, body mind and soul. Sensual dance, filled with devotuional states and uplifting emotiuons, becomes an extraordinary tool for rediscovering our femininity in a sublime way. Consicious, sensual movement has a deeply harmonizing effect on many levels:
                </Typography>
                {benefits.map((el) => <Typography key={el} component="div" variant="caption" gutterBottom sx={{px: 1}}>*{el}</Typography>)}
                
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Box sx={{width: {xs: '95%', sm:'70%', md: '60%', lg:'50%'}, position: 'absolute', left: '50%', transform: 'translateX(-50%)', background: 'white', mt: -14}}>
        <Box sx={{
          backgroundColor: '#955B35',
          color: 'white',
          p: 3,
          height: {xs:'50%', md: '40%'},
          display: 'flex', flexDirection: 'column',
        }}>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 3, fontSize: '1rem'}}>
            During this workshop you will feel connected to your mind, body, and spirit to experience the beauty that is divine self love. This workshop will ...
          </Typography>
          <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
            {workshopBenefits.map((el) => <Typography key={el} component="div" variant="caption" gutterBottom sx={{px: 1, fontSize: '0.8rem'}}>*{el}</Typography>)}
          </Box>
        </Box>
          </Box>
      </Box>

      <Box sx={{
        '@media (max-width: 400px)': { mt: '55vh'},
        '@media (min-width: 401px) and (max-width: 500px)': { mt: '50vh'},
        '@media (min-width: 501px) and (max-width: 599px)': {mt: '65%' },
        '@media (min-width: 600px) and (max-width: 725px)': { mt: '60%'},
        '@media (min-width: 726px) and (max-width: 900px)': {mt: '40vh' },
        '@media (min-width: 901px)': {mt: '30vh' }
    }}/>
      <Typography variant="body2" sx={{ textAlign: 'start', mb: 3, fontSize: '1rem'}}>
      You also have the option to include Cacao with this service. Why add cacao? Cacao is a heart opening medicine that invites us to love ourselves, provides energy, focus and healing. It will be intimate than most of us have ever known. That’s why it’s so powerful to combine dance and cacao. With this combination you’ll be ready to meet the goddess you are and connect with her on a deeper level.

      </Typography>
      <Box sx={{ display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mb: 5}}>
        <CardMedia
            component="img"
            sx={{ 
              width: {xs: 100, sm: 200},
              height: {xs: 100, sm: 200}
            }}
            image={coffeeBeans}
            alt="Foxy"
          />
      </Box>

      <Box sx={{height: '50vh'}}>
      <Box sx={{position: 'relative', background: '#392D13', color: 'white'}}>
        <Box sx={{textAlign: 'center', height: 100, display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Typography component="div" variant="" sx={{fontWeight: 700}}>Elevate your next event and include a “Awaken the Goddess” movement class </Typography>
        </Box>
      </Box>
        <Box sx={{ mt: 20, textAlign: 'center'}}>
            <FoxyButton
              fullWidth={false}
              variant="contained" 
              label={"Book Workshop"} 
              backgroundColor={'#CFC5B3'}
              hoverBackgroundColor={'#CFC5B3'}
              height={'initial'}
              width={'initial'}
              sx={{
                borderRadius: 5,
                fontSize:{xs: 12, md: 15},
                color: 'white',
                fontWeight: 700,
                boxShadow: '0px 0px 20px 20px rgb(201 200 22 / 20%), inset 0px 0px 20px 0px rgb(255 244 204), 0px 1px 5px 0px rgb(226 214 180)'
              }}
            />
        </Box>
    </Box>
    </Container>
  </div>
);

export default SensualDance;
