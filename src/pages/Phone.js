import React from "react";
import Card from "./../components/Card";
import { Typography, Grid, Box, Avatar } from "@mui/material";
import { buyonegetoneArray } from "../assets/data";
import { ClassNames } from "@emotion/react";
import phone from "./../assets/Category icons/Asset 42.png";
const BuyOneGetOne = () => {
  console.log(buyonegetoneArray);
  return (
    <div>
      <div className="titleDiv">
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Avatar src={phone} />
          <Typography
            className={"title"}
            style={{ textAlign: "start" }}
            variant="h5"
          >
            Phone
          </Typography>
        </Box>
        <Typography style={{ textAlign: "end" }} variant="body1">
          View More
        </Typography>
      </div>
      <Grid container spacing={1}>
        {buyonegetoneArray.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              xs={6}
              sm={6}
              md={2}
              display="flex"
              justifyContent="center"
            >
              <Card name={item.name} price={item.price} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default BuyOneGetOne;
