import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../component/ListItem'
import SlidePromo from '../component/SlidePromo'
import '../Home.css';
import AppBar from '@material-ui/core/AppBar';
import Header from '../component/Header'
import AreaKirim from '../component/AreaKirim'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header /> 
        <AreaKirim />  
        <SlidePromo />
        <ListItem />
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home;
