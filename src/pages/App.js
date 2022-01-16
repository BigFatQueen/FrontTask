import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import banner from "./../assets/WebBanner&AD/Banner2.jpg";
import { makeStyles } from "@mui/styles";
import Categories from "./Categories";
import BuyOneGetOne from "./BuyOneGetOne";
import Promotion from "./Promotion";
import NewArrival from "./NewArrival";
import DemoCarousel from "../components/Carousel";
import Brand from "./Brand";
import Phone from "./Phone";
import Tablet from "./Tablet";
import Laptop from "./Laptop";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  banner: {
    minHeight: "60vh",
    height: "500px",
    backgroundImage: `url(${banner})`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "center",
      minHeight: "30vh",
      height: "30px",
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.banner}>
        <Navbar />
      </div>
      <Categories />
      <BuyOneGetOne />
      <Promotion />
      <NewArrival />
      <DemoCarousel />
      <Brand />
      <Phone />
      <Laptop />
      <Tablet />
      <Footer />
    </div>
  );
}

export default App;
