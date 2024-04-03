import React from 'react';
import styles from './Retreats.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import girlsTrip from '../../assets/photosAlexis2/retreat_girls_trips.jpg';
import healing from '../../assets/photosAlexis2/retreat_healing.jpg';
import outing from '../../assets/photosAlexis2/retreat_outing.jpeg';
import Grid from '@mui/material/Grid';
import Retreat1 from '../../assets/photosAlexis1/Healing_Retreat.png'
import Retreat2 from '../../assets/photosAlexis1/thailand1.png'
import Retreat3 from '../../assets/photosAlexis1/thailand2.png'
import Retreat4 from '../../assets/photosAlexis1/thailand3.png'
import pastRetreat from '../../assets/photosAlexis1/pastRetreat.jpg'
import pin from '../../assets/photosAlexis1/pin.png'
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import Pointer from '../../assets/photosAlexis1/clickPointer.png'

const retreatsArr = [
  {
    img: Retreat1,
    link: ''
  },
  {
    img: Retreat2,
    link: ''
  },
  {
    img: Retreat3,
    link: ''
  },
  {
    img: Retreat4,
    link: ''
  },
];

const positions = [
  { top: 0, left: 0 },
  { top: 0, right: 0 },
  { bottom: 0, left: 0 },
  { bottom: 0, right: 0 }
];


const Retreats = () => {

  
  return(
  <div className={styles.Contact}>
    <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ position: 'relative'  }}>
          <Box sx={{height: {xs:'17vh', md: '25vh'}, bgcolor: '#cfe8fc'}}>
            <Box></Box>
            <Box>
              <Typography variant="h6">Foxes Unplug</Typography>
              <Typography variant="body2">UNPLUG. RESTORE, OVERCOME, LOVE & LIVE TU VIDA</Typography>
            </Box>
          </Box>
          <Box sx={{width: {xs: '70%', lg:'50%'}, position: 'absolute', left: '50%', transform: 'translateX(-50%)', background: 'white', p: 1, mt: -9}}>
        <Box sx={{
          backgroundColor: '#FADD76',
          color: 'black',
          p: 3,
          height: {xs:'27vh', md: '40vh'}
        }}>
          Video Here
        </Box>
          </Box>
        </Box>
        <Box sx={{ mt: {xs:'27vh', md: '40vh'} }}>
          <Typography variant="body2" sx={{textAlign: 'center', width: {xs: '85%', md: '70%'}, m: 'auto'}}>
            Wanted to travel but too afraid to do it alone? Or make plans with your friends but it neve goes through?, well, nme too! And therefore, Foxes Unplug was created. Foxes Unplug is NOT only a retreat/girls's trip. It's a community of women aka "Fxes" that will become sisters that'll laug, cry, heal, party, dance, have fun, conquer fears, experience and make memories together. With foxes unplung you'll form a lasting connection with yourself and your new sisters #foxegang
          </Typography>

        </Box>
        <Box sx={{my: 5}}>
          <Typography variant="h3" sx={{textAlign: 'center', m: 'auto'}}>
            Retreat or Girls Trips
          </Typography>
        </Box>

          <Box sx={{background: '#955B35', mb: 5, p: 5, color:'white' }}>
            <Box sx={{ display: {xs: 'block', sm: 'flex'}, border: 'none', borderShadow: 'none', alignItems: {xs: 'center', md: 'flex-start'} }}>
            <Box sx={{px: 1, textAlign: 'center'}}>
                <Typography component="div" variant="h3" sx={{ fontFamily: "Gotu, sans-serif",  display: {xs: 'block', sm: 'none'}, mb: 3}}>Healing Retreats</Typography>
                <CardMedia
                    component="img"
                    sx={{ 
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      margin: 'auto'
                      }}
                    image={healing}
                    alt="Foxy"
                  />
                  
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', color:'white' }}>
                <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
                  <Typography component="div" variant="h3" sx={{ fontFamily: "Gotu, sans-serif", display: {xs: 'none', sm: 'block'}}}> Healing Retreats</Typography>
                  <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}, color:'white'}}>
                    Our retreats are a combination of self-love, wellness, healing and adventure. It's a safe place for you to let your guard down, let go og trauma, prioritize healing and growth while focusing on your well-being physically, psychologically, and spiritually. The focus is inner transformation and meeting foxes just like you OF COURSE!.
                  </Typography>
                </CardContent>
              </Box>
            </Box>
            <Box sx={{ display: {xs: 'block', sm: 'flex'}, border: 'none', borderShadow: 'none', alignItems: {xs: 'center', md: 'flex-start'}, flexDirection: 'row-reverse' }}>
            <Box sx={{px: 1, textAlign: 'center'}}>
                <Typography component="div" variant="h3" sx={{ fontFamily: "Gotu, sans-serif",  display: {xs: 'block', sm: 'none'}, m: 3}}> Girls Trips</Typography>
                <CardMedia
                    component="img"
                    sx={{ 
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      margin: 'auto'
                      }}
                    image={girlsTrip}
                    alt="Foxy"
                  />
                  
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
                  <Typography component="div" variant="h3" sx={{ fontFamily: "Gotu, sans-serif", display: {xs: 'none', sm: 'block'}}}> Girls Trips</Typography>
                  <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}, color:'white'}}>
                      Our Girls trip is bringing all you Foxy Foxes together!. This trip is a getaway of adventure, peace, fun, trying and experiencing NEW things, creating new friendships, LIVING LIFE, and BRINGING THAT SEXY BACK!. It's a sage place where you can be unapologetically yourself! and have a good time with no worries. HAKUNA MATATA foxes!.
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Box>

          <Box sx={{}}>
              <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", mb: 3, textAlign: 'center', fontWeight: 700, fontSize: 20}}>FOXES UNPLUG ALSO OFFERS COUPLES RETREATS</Typography>
            <Box sx={{ display: {xs: 'block', sm: 'flex'}, border: 'none', borderShadow: 'none', alignItems: {xs: 'center', md: 'flex-start'} }}>
              <Box sx={{px: 1, textAlign: 'center'}}>
                  <CardMedia
                      component="img"
                      sx={{ 
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        margin: 'auto'
                        }}
                      image={outing}
                      alt="Foxy"
                    />
                    
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                  <CardContent sx={{ flex: '1 0 auto', textAlign: 'start' }}>
                    <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}}}>
                      ALL COUPLES ARE WELCOMED!!. This couples retreat is a bit different from your average retreat. Yes! We'll be doiing some work by relighting that lost spark, rekindling your estranged relationship, reconnecting/recommiting with one another, communicating from your heart, healing old wounds and relearning having fun. Bit it isn't all kumbaya! We also take in where we're traveling. We explore and experience where we ar in the moment. So, if you are having problems within your relationship and want to take the first step and work on it... COME! If you don't have any problems within your relationships, you can still....COME! it's all about you and your partners intentions. All we ask of you is for an open mind and enjoy yourselves. This retreat is hosted by Crissa Jackson and Alexis Jackson.
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Box>


          {/* UpComing Retreat */}
          <Box sx={{ flexGrow: 1, my: 5 }}>

          <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", mb: 8, textAlign: 'center', fontWeight: 700, fontSize: 20}}>UPCOMING RETREATS</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
              {retreatsArr.map((el, i) => <Grid item xs={2} sm={6} md={3} key={`Retreat_${i}`} >
                  <Box>
                  <CardMedia
                  
                      component="img"
                      sx={{ 
                        width: {xs: '100%', sm: 250},
                        margin: 'auto',
                        cursor: 'pointer'
                        }}
                      image={el.img}
                      alt="Retreat"
                    />
                  </Box>
                </Grid>)}
                
            </Grid>

            <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", my: 9, mb: 15, textAlign: 'center', fontWeight: 700, fontSize: 20}}>Yes! we offer payment plans</Typography>
          </Box>

          <Box sx={{
            background: '#1E310A', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '52vh',
            my: 5,
            position: 'relative'
            }}>

            <Box sx={{width: 350, p: 3, background: 'white',mt: 2, position: 'relative', transform: 'rotate(10deg)'}}>
            <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", mt: -3, textAlign: 'center', fontWeight: 700, fontSize: 20, color: 'salmon'}}>FOXGANG MEMORIES</Typography>
              {positions.map((position, index) => (
                <Box
                  key={`pin_${index}`}
                  sx={{
                    position: 'absolute',
                    ...position
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: 30,
                      margin: 'auto'
                    }}
                    image={pin} // replace 'pin' with your image source
                    alt="Retreat"
                  />
                </Box>
              ))}
              <CardMedia
                component="img"
                sx={{ 
                  // width: 300,
                  // height: 200,
                  margin: 'auto'
                  }}
                image={pastRetreat}
                alt="Retreat"
              />
            </Box>
            
            <Box sx={{p: 3, position: 'absolute', bottom: -10, right: 0}}>
              <FoxyButton
                fullWidth={false}
                variant="contained" 
                label={"SEE MORE MEMORIES"} 
                backgroundColor={'#955B35'}
                hoverBackgroundColor={'#955B35'}
                height={'initial'}
                sx={{
                  width: 250,
                  fontSize: '1rem',
                  color: 'white',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              />
              <CardMedia
                component="img"
                sx={{ 
                  width: 50,
                  // height: 200,
                  margin: 'auto',
                  position: 'absolute',
                  right: 0,
                  bottom: '-20px',
                  transform: 'rotate(347deg)'
                  }}
                image={Pointer}
                alt="Retreat"
              />
            </Box>
          </Box>

          <Box sx={{mb: 4}}>
            <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", mt: -3, textAlign: 'center', fontWeight: 700, fontSize: 20,}}>
              Want to be a sponsor??
            </Typography>
            <Typography component="div" variant="body2" sx={{  p: 3, pt: 1}}>
              You can be a sponsor in many different ways, by gifting or by donating a trip to those who cannot afford it. If you would like more information email me at <a href= "mailto: Foxesunplug@gmail.com" style={{color: 'inherit'}}> Foxesunplug@gmail.com </a>
            </Typography>
            <Box sx={{textAlign: 'center'}}>
              <FoxyButton
                fullWidth={false}
                variant="contained" 
                label={"BECOME A SPONSOR"} 
                backgroundColor={'#312813'}
                hoverBackgroundColor={'#312813'}
                height={'initial'}
                sx={{
                  width: 300,
                  borderRadius: 5,
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 700,
                }}
              />
            </Box>
          </Box>
      </Container>
  </div>
  )
};

export default Retreats;
