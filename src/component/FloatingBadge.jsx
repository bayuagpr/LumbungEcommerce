import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Home.css';
import Grid from '@material-ui/core/Grid';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import cart from '../img/cart.png'

class FloatingBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { value, price, onClose,} = this.props;
   
    return (
      <div>
        <SnackbarContent
        className={"FloatingBox"}
      aria-describedby="cart-float"
      message={
        <div id="cart-float">
           <Grid item xs container direction="column" >
              <Grid item xs>
              <Grid item xs container direction="row">
              <Grid item xs>
              <div className="JumlahItem">
                  {value} Item
                </div>
              </Grid> 
              <Grid item xs>
              <div className="DividerBadge">
                  |
                </div>
              </Grid> 
              <Grid item xs>
              <div className="JumlahHarga">
              Rp.5000
                </div>
              </Grid> 
              </Grid>
              </Grid>
              <Grid item xs>
              <div className="KeteranganPromo">
                  Tambah item seharga minimal 10 ribu untuk gratis ongkir!
                </div>
              </Grid>  
            </Grid>
        </div>
      }
      action={[
        <ButtonBase  className={"ButtonImageCart"} >
        <img className="ButtonCart"  src={cart} />
        </ButtonBase>
        ,
      ]}
    
    />
      </div>
    );
  }
}

FloatingBadge.propTypes = {
  value: PropTypes.number,
};

export default FloatingBadge;
