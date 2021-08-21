import React from "react";
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
export default function Category(props) {
  //console.log("19",props)
  const classes = useStyles();
  const [color, setColor] = React.useState([]);
  const [colorSelect, setColorSelect] = React.useState("");
  ////console.log(color);
  const handleChange = (event) => {
    ////console.log(event.target.value)
    //console.log("jjjjj", color);
    props.datapriya(event.target.value);
    event.preventDefault();
    setColorSelect(event.target.value);
  };
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/color",
      headers: {},
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
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-labelss">Color</InputLabel>
        <Select
          labelId="demo-simple-select-filled-labelss"
          id="demo-simple-select-filled"
          value={colorSelect}
          onChange={handleChange}
        >
          {color.map((items, index) => {
            //console.log("66",items);
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
