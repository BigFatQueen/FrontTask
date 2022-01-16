import React from "react";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import { Typography } from "@mui/material";
import bagshop from "./../assets/WebBanner&AD/imgs/shopbag1.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "160px",
  },
  imgCard: {
    width: "160px",
    height: "160px",
    backgroundImage: `url(${bagshop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",

    backgroundColor: "#686868",
    color: "#fff",
    borderRadius: "8px",
  },
  discount: {
    display: "inline",
    backgroundColor: "#df1f2c",
    height: "20px",
    padding: "5px",
    color: "#fff",
  },
  likeitem: {
    backgroundColor: "#333 !important",
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "12px",
    right: "0px",
  },
  originalPrice: {
    textDecoration: "line-through !important",
  },
}));
const Card = ({ name, price, discount = 0, newArrival = false }) => {
  const classes = useStyles();
  console.log(discount);
  return (
    <div className={classes.root}>
      <div className={classes.imgCard}>
        {discount > 0 && <div className={classes.discount}>00% off</div>}

        <IconButton
          className={classes.likeitem}
          style={{ left: discount <= 0 ? 117 : 48 }}
        >
          <FavoriteIcon fontSize="small" sx={{ color: "#fff" }} />
        </IconButton>
      </div>
      <div className={classes.content}>
        <Typography variant="body2" component="div">
          {name}
        </Typography>
        {discount <= 0 && (
          <Typography
            variant="subtitle1"
            style={{ color: newArrival ? "red" : "" }}
            component="div"
          >
            {price}Ks
          </Typography>
        )}
        {discount > 0 && (
          <Typography
            variant="subtitle1"
            style={{ color: "red" }}
            component="div"
          >
            {discount}Ks
          </Typography>
        )}
        {discount > 0 && (
          <Typography
            variant="body2"
            className={classes.originalPrice}
            component="div"
          >
            {price}Ks
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Card;
