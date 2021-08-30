import React from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { PersonPinSharp } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Category(props) {
  ////console.log("20",props)
  const classes = useStyles();
  const [category, setCategory] = React.useState([]);
  const [categorySelect, setCategorySelect] = React.useState('');
  //////console.log(category);
  const handleChange = (event) => {
    event.preventDefault()
    ////console.log("25",event.target.value);
    props.datapriya(event.target.value)
    setCategorySelect(event.target.value)
    //  setCategory(event.target.value)
    ////console.log(event.target.value);
  };
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/category",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //////console.log(JSON.stringify(response.data));
        const categoryData = response.data.data;
        //////console.log(categoryData);
        setCategory(categoryData);
      })
     
  }, []);

  return (
   
    <div>
     
     
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={categorySelect}
          onChange={handleChange}
        >
          {category.map((items, index) => {
          //  ////console.log(items);
            return (
                <MenuItem value={items.name} key={index}>
                  {items.name}
                </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
