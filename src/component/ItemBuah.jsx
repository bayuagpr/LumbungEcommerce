import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonLove from './ButtonLove.jsx';
import ButtonBeli from './ButtonBeli.jsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import InputQuantity from './InputQuantity'
import Grid from '@material-ui/core/Grid';
import '../Home.css';
import gambar from '../img/ProductImage.png';
import IconTambah from '../img/tambah.png'
import IconKurang from '../img/kurang.png'


class ItemBuah extends Component {
  constructor(props) {
    super(props);
    const value = 1;
    
    this.state = {
      initialValue: props.value,
          value,
      beli: false
    };
  }

  handleBeli = () => {
    this.props.handleBadge();
    this.props.handleIncrement(1);
    this.setState({
      beli: true,
    });   
      }

      

      handleQuantityInputChange = (event) => {
        const { value } = event.target;
    
        const numericValue = Math.floor(Number(value));
    
        if (Number.isNaN(numericValue)) return;
    
        this.setState({ value: numericValue });
      };
    
      handleIncrementButton = () => {
        const value = this.state.value + 1;
        this.props.handleIncrement(1);
        this.props.handleBadge();
        this.setState({ value });
      };
    
      handleDecrementButton = () => {
        const value = this.state.value - 1;
        
        this.props.handleDecrement(1);
        if (value >= 1) {
          this.props.handleBadge();
          this.setState({ value });
        }else{
          this.setState({
            beli: false,
          });  
        }
      };
      

  render() {
  
    const { beli, value } = this.state;
    const {clickProduct} = this.props;
    
    return (
      <div className="ItemBuah">
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase  className={"ProductButtonImage"} onClick={clickProduct}>
            <img className="ProductImage" src={gambar} />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} container>
          <div className="KeteranganBuah">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <div className="JudulBuah">Mangga</div>
              <div className="DeskripsiBuah">Mangga enak</div>
              <Grid item xs={12} container>
         <Grid item xs={6}>
          <div className="HargaBuah">Rp.5000</div>
        </Grid>
        <Grid item xs={6}>      
          {beli ? (<InputQuantity increment={this.handleIncrementButton} decrement={this.handleDecrementButton} value={value} quantityChange={this.handleQuantityInputChange} />)
          :(<ButtonBeli nama="Beli" onClick={this.handleBeli}/>)}
        </Grid>
              </Grid>
            </Grid> 
          </Grid>
          </div>
        </Grid>
        </Grid>
        </div>
    );
  }
}

ItemBuah.propTypes = {
  buah: PropTypes.object,
  clickProduct: PropTypes.func,
  handleBadge: PropTypes.func,
  handleClose: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
};

export default ItemBuah;
