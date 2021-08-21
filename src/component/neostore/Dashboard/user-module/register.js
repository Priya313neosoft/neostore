
import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
 import VisibilityOff from '@material-ui/icons/VisibilityOff';
 import PhoneIcon from '@material-ui/icons/Phone';
 import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import FormLabel from '@material-ui/core/FormLabel';

import {useState} from "react"
const GreenRadio=withStyles({
  root:{
    color:green[400],
    '&$cecked':{
      color:green[600],
    },
  },
  checked:{},
})((props)=><Radio color="default" {...props}/>);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function InputWithIcon() {
    const [values, setValues] = React.useState({
    showPassword: false,
  });
    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();
  const [value, setValue] = useState('female');
  const handleChanges = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container"> 
       <form autoComplete="off"> 
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end" variant="outlined">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Enter first Name" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Enter last Name" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Enter email address" />
          </Grid>
        </Grid>
      </div>
      
         <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Enter Mobile Number" />
          </Grid>
        </Grid>
      </div>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChanges}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    
  </RadioGroup>
  <FormControl className={clsx(classes.margin, classes.textField)} autoComplete="off">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                   <OutlinedInput       id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
             value={values.password}
             onChange={handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                   edge="end"
                 >
                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
                 </IconButton>
               </InputAdornment>
             }
             labelWidth={70}
           />
         </FormControl>
         <FormControl className={clsx(classes.margin, classes.textField)} autoComplete="off">
        <InputLabel htmlFor="outlined-adornment-password"> Confirm Password</InputLabel>
                   <OutlinedInput       id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
             value={values.password}
             onChange={handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                   edge="end"
                 >
                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
                 </IconButton>
               </InputAdornment>
             }
             labelWidth={70}
           />
         </FormControl>
  <Button variant="contained" color="secondary" disableElevation>
  Register
</Button>
    
         </form>
    </div>
  );
}
