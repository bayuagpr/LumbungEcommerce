import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonLove from './FieldInputQuantity';
import ButtonInputQuantity from './ButtonInputQuantity';
import Grid from '@material-ui/core/Grid';
import '../Home.css';
import IconTambah from '../img/tambah.png'
import IconKurang from '../img/kurang.png'
import InputNumber from 'react-input-just-numbers';
import FieldInputQuantity from './FieldInputQuantity';

class InputQuantity extends Component {
    constructor(props) {
        super(props);
    
        
      }
    
      
    
      

  render() {
    const { increment, decrement, value, quantityChange } = this.props;
    return (
     <div className="InputQuantity">
        <Grid container>
        <Grid item xs>
        <ButtonInputQuantity icon={IconKurang} onClick={decrement}/>
        </Grid>
        <Grid item xs>
        <FieldInputQuantity value={value} onChange={quantityChange}/>
        </Grid>
        <Grid item xs>
        <ButtonInputQuantity icon={IconTambah} onClick={increment}/>
        </Grid>
        </Grid>
      
        
     </div>
    );
  }
}

InputQuantity.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  value: PropTypes.func,
  quantityChange: PropTypes.func,
};

export default InputQuantity;
