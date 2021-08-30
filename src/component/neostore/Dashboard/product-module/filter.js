import React from 'react'
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Filter() {
    const classes = useStyles();
    const [category, setCategory] = React.useState([]);
    ////console.log(category);
    const handleChange = (event) => {
      ////console.log(event.target.value)
      ////console.log("jjjjj", category);
      event.preventDefault();
      setCategory(event.target.value);
    };
    const [color, setColor] = React.useState([]);
  ////console.log(color);
  const handleChanges = (event) => {
    ////console.log(event.target.value)
    ////console.log("jjjjj", color);
    event.preventDefault();
    setColor(event.target.value);
  };
    useEffect(() => {
        var config = {
          method: "get",
          url: "https://neostore-api.herokuapp.com/api/category",
          headers: {},
        };
    
        axios(config)
          .then(function (response) {
            ////console.log(JSON.stringify(response.data));
            const categoryData = response.data.data;
            ////console.log(categoryData);
            setCategory(categoryData);
          })
          .catch(function (error) {
            ////console.log(error);
          });
      }, []);
      useEffect(() => {
        var config = {
          method: 'get',
          url: 'https://neostore-api.herokuapp.com/api/color',
          headers: { }
        };
        
        axios(config)
        .then(function (response) {
          ////console.log(JSON.stringify(response.data));
          const colorData = response.data.data;
          ////console.log(colorData);
          setColor(colorData);
        })
        .catch(function (error) {
          ////console.log(error);
        });
        
          }, []);
    
    return (
        <>
        <div>
     
     <FormControl variant="filled" className={classes.formControl}>
       <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
       <Select
         labelId="demo-simple-select-filled-label"
         id="demo-simple-select-filled"
         value={category}
         onChange={handleChange}
       >
         {category.map((items, index) => {
           ////console.log(items);
           return (
             <>
               <MenuItem value={items.id} key={index}>
                 {items.name}
               </MenuItem>
             </>
           );
         })}
       </Select>
     </FormControl>
   </div>
   <div>
     
     <FormControl variant="filled" className={classes.formControl}>
       <InputLabel id="demo-simple-select-filled-labels">Color</InputLabel>
       <Select
         labelId="demo-simple-select-filled-labels"
         id="demo-simple-select-filled"
         value={color}
         onChange={handleChanges}
       >
         {color.map((items, index) => {
           ////console.log(items);
           return (
             <>
               <MenuItem value={items._id} key={index}>
                 {items.name}
               </MenuItem>
             </>
           );
         })}
       </Select>
     </FormControl>
   </div>
        </>
        
    )
}

export default Filter
