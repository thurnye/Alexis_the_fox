import React from 'react';
import styles from './Contact.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import CardMedia from '@mui/material/CardMedia';



const services = ['Sensual Dance', 'Caco Circles', 'Retreats', 'Partnerships', 'Speaking', 'Engagements'];
const Contact = () => {

  
  return(
  <div className={styles.Contact}>
    <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ position: 'relative'  }}>
          <Box sx={{height: {xs:'17vh', md: '25vh'}, bgcolor: '#cfe8fc'}}></Box>
          <Box sx={{width: {xs: '90%', lg:'50%'}, position: 'absolute', left: '50%', transform: 'translateX(-50%)', background: 'white', p: 1, mt: -9}}>
        <Box sx={{
          backgroundColor: '#955B35',
          color: 'white',
          p: 3
        }}>

          {/* Name */}
          <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'end', mt: 4}}>
            <Typography variant="body2" sx={{mr: 1}}>Name</Typography>
              <TextField id="standard-basic" variant="standard" sx={{
                color: 'white', 
                flexGrow: 1, 
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white !important', // Change border bottom color to white
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottomColor: 'white !important', // Change border bottom color to white on focus
                },
                '& .MuiInputBase-input': {
                  color: 'white !important', // Change text input color to white
                },
                '& .MuiInputBase-input:focus': {
                  color: 'white !important', // Change text input color to white on focus
                },
            }}/>
          </Box>
          {/* Email */}
          <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'end', mt: 4}}>
            <Typography variant="body2" sx={{mr: 1}}>Email</Typography>
              <TextField id="standard-basic" variant="standard" sx={{
                color: 'white', 
                flexGrow: 1, 
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white !important', // Change border bottom color to white
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottomColor: 'white !important', // Change border bottom color to white on focus
                },
                '& .MuiInputBase-input': {
                  color: 'white !important', // Change text input color to white
                },
                '& .MuiInputBase-input:focus': {
                  color: 'white !important', // Change text input color to white on focus
                },
            }}/>
          </Box>

          {/* Services */}
          <Box sx={{display: 'flex', flexDirection: 'column', mt: 4 }}>
            <Typography variant="body2" sx={{mt: 1, 
              textAlign: 'center', }}>Interested In</Typography>
             <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={10}
                onChange={() => ''}
                label="Age"
                sx={{
                  color: "white",
                  '.MuiSvgIcon-root ': {
                    fill: "white !important",
                  },
                  '&.MuiSelect-root:before' : {
                    borderBottomColor: 'white !important'
                  },
                  '& .MuiInputBase-input': {
                    color: 'white !important', // Change text input color to white
                  },
                  '& .MuiInputBase-input:focus': {
                    color: 'white !important', // Change text input color to white on focus
                  },
                  
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Message */}
          <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'end', my: 4}}>
            <Typography variant="body2" sx={{mr: 1}}>Message</Typography>
              <TextField 
              id="standard-multiline-static"
              multiline
              rows={4}
              variant="standard"
              sx={{
                color: 'white', 
                flexGrow: 1, 
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white !important', // Change border bottom color to white
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottomColor: 'white !important', // Change border bottom color to white on focus
                },
                '& .MuiInputBase-input': {
                  color: 'white !important', // Change text input color to white
                },
                '& .MuiInputBase-input:focus': {
                  color: 'white !important', // Change text input color to white on focus
                },
            }}/>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <FoxyButton
              fullWidth={false}
              variant="contained" 
              label={"Submit"} 
              backgroundColor={'#312813'}
              hoverBackgroundColor={'#312813'}
              height={'initial'}
              sx={{
                width: 250,
                borderRadius: 5,
                fontSize: 20,
                color: 'white',
                fontWeight: 700,
              }}
            />
          </Box>
        </Box>
      </Box>
        </Box>
      </Container>
  </div>
)};

export default Contact;
