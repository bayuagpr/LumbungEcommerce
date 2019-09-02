import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../img/logo.png';
import chat from '../img/chat.png';
import history from '../img/PurchaseHistory.png';
import Grid from '@material-ui/core/Grid';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div>
      <Toolbar>
        <Grid container justify="flex-start">
        <img className="LogoToolbar" src={logo}></img>
        </Grid>
        <Grid container justify="flex-end">
        <img className="PurchaseHistory" src={history}></img>
        <img className="ChatToolbar" src={chat}></img>
        </Grid>
        </Toolbar>
        </div>
      );
    }
  }

Header.propTypes = {};

export default Header;
