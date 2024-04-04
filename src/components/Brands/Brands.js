// credit : https://codesandbox.io/p/sandbox/infinite-horizontal-auto-scroll-y82f8?file=%2Fsrc%2Fstyles.css%3A43%2C1
import React from 'react';
import styles from './Brands.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import gap from '../../assets/LogoPartnersBRANDS/adoreME.png';
import cerebral from '../../assets/LogoPartnersBRANDS/cerebral.png';
import champs from '../../assets/LogoPartnersBRANDS/Champs.png';
import foria from '../../assets/LogoPartnersBRANDS/Foria.png';
import fruitByTheFoot from '../../assets/LogoPartnersBRANDS/fruitbythefoot.png';
import lelo from '../../assets/LogoPartnersBRANDS/Lelo.png';
import pantene from '../../assets/LogoPartnersBRANDS/Pantene.png';
import summers from '../../assets/LogoPartnersBRANDS/summers.jpg';
import tula from '../../assets/LogoPartnersBRANDS/Tula.png';
import walmart from '../../assets/LogoPartnersBRANDS/walmart.png';




const images = [gap,
cerebral,
champs,
foria,
fruitByTheFoot,
lelo,
pantene,summers,tula,walmart].map((image, index) => ({
    id: index,
    image
}))

const Brands = ({ speed = 25000 }) => {
  return(
  <Box className={styles.Brands} sx={{background: '#F7F7F7', position: 'relative'}}>
       <Typography variant="h6" sx={{
        textAlign: 'center',
        py: 2
      }}>Brands I've worked with</Typography>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage}/>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage}/>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage}/>
              </div>
            ))}
          </section>
        </div>
      </div>
  </Box>
)};


export default Brands;
