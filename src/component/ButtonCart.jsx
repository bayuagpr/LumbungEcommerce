import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Home.css'
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';


class ButtonCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {nama, onClick} = this.props;
    return (
      <div><ButtonBase className={"ButtonBaseKeranjang"}>
        <Grid className={"ButtonKeranjang"} container justify="center" alignItems="center"><div className="TextButtonKeranjang" onClick={onClick}>{nama}</div></Grid>
        
      </ButtonBase>
        
      </div>
    );
  }
}

ButtonCart.propTypes = {
  nama: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonCart;
