import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Home.css';
import Grid from '@material-ui/core/Grid';

class DetailProduk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
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
