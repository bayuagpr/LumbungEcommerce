import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Home.css';
import Grid from '@material-ui/core/Grid';
import ButtonCart from './ButtonCart'
import ProductImageDetail from '../img/ProductImageDetail.png'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class DetailProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }
  handleClickOpen = () => { 
    this.setState({
      open: true,
    });
  }
  

  handleClose=()=> {
    this.setState({
      open: false,
    });
  }

  render() {
    const {buahan} = this.props;
    return (
      <div>
       
         
      </div>
    );
  }
}

DetailProduk.propTypes = {
  buahan: PropTypes.object,
};

export default DetailProduk;
