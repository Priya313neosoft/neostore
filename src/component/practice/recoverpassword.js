import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
function Recoverpassword() {
    const [values, setValues] = React.useState({
        showPassword: false,
      });
      const [valuess, setValuess] = React.useState({
          showPasswords:false,
      }
        )
        const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleChanges=(prop)=>(event)=>{
          setValuess({...valuess,[prop]:event.target.value})
      }
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      const handleClickShowPasswords=()=>{
          setValuess({...valuess,showPasswords:!valuess.showPassword})
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const handleMouseDownPasswords=(event)=>{
          event.preventDefault();
      }
    const hanadleSubmit=()=>{
        console.log(values,valuess)
   setValuess();
   setValues();
    }
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
      }));
      const classes = useStyles();
    return (
        <>
        <h4>Recover Password</h4>
        <p>Verification code send on your registered Email</p>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={hanadleSubmit}>
        <TextField id="outlined-basics" label="Outlined" variant="outlined" />
        <InputLabel htmlFor="outlined-adornment-passwordss">Password</InputLabel>
                   <OutlinedInput       id="outlined-adornment-passwordss"
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
        <InputLabel htmlFor="outlined-adornment-password"> Confirm Password</InputLabel>
                   <OutlinedInput       id="outlined-adornment-password"
          type={valuess.showPasswords ? 'text' : 'password'}
             value={valuess.password}
             onChange={handleChanges('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPasswords}
                   onMouseDown={handleMouseDownPasswords}
                   edge="end"
                 >
                   {valuess.showPasswords ? <Visibility /> : <VisibilityOff />}
                 </IconButton>
               </InputAdornment>
             }
             labelWidth={70}
           />
           <Button variant="contained" color="secondary" disableElevation>
  Register
</Button>
  
</form>
       
    
         
            
        </>
    )
}

export default Recoverpassword
