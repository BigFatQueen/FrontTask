import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import mmFlag from "./../assets/WebBanner&AD/imgs/mm.png";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  quantityRoot: {
    color: "#fff",
    "& .MuiSelect-select ": {
      display: "flex",
      columnGap: 3,
      color: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
  flag: {
    borderRadius: "0px !important",
  },
}));

export default function SelectAutoWidth() {
  const classes = useStyles();
  const [value, setValue] = React.useState(10);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 80 }}
        classes={{ root: classes.quantityRoot }}
      >
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          classes={{
            root: classes.selectRoot,
            icon: classes.icon,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>
            <Avatar
              className={classes.flag}
              src={mmFlag}
              sx={{ width: 24, height: 24 }}
            />
            Ks
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
