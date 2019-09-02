import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Grid from '@material-ui/core/Grid';
import dot from '../img/dot-active.png';

class CustomSlide extends Component {
    render() {
      const { index, ...props } = this.props;
      return (
        <div className="CarouselPromo" {...props}>
          <h3>{index}</h3>
        </div>
      );
    }
  }

export default class SliderPromo extends Component {
    render() {
      const settings = {
          dotsClass: "slick-dots",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const text = "Slide Promo"
      return (
        <div className="SliderPromo">
             <Grid container spacing={2}>
             <Grid item xs>
          <Slider {...settings}>
          <CustomSlide index={text} />
          <CustomSlide index={text} />
          <CustomSlide index={text} />
          <CustomSlide index={text} />
          <CustomSlide index={text} />
          <CustomSlide index={text} />
          </Slider>
             </Grid>
             </Grid>
         
        </div>
      );
    }
  }