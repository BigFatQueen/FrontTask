import React from "react";
import Card from "../components/Card";
import { Typography, Grid } from "@mui/material";
import { promotion } from "../assets/data";
import { ClassNames } from "@emotion/react";
const Promotion = () => {
  return (
    <div>
      <div className="titleDiv">
        <Typography
          className={"title"}
          style={{ textAlign: "start" }}
          variant="h5"
        >
          Promotion
        </Typography>
        <Typography style={{ textAlign: "end" }} variant="body1">
          View More
        </Typography>
      </div>
      <Grid container spacing={1}>
        {promotion.map((item, index) => {
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
              <Card
                name={item.name}
                price={item.price}
                discount={item.discount}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Promotion;
