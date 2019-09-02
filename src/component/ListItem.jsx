import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import '../Home.css';
import ItemBuah from './ItemBuah.jsx';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import FloatingBadge from './FloatingBadge'
import DetailProduk from './DetailProduk'
import ButtonCart from './ButtonCart'
import ProductImageDetail from '../img/ProductImageDetail.png'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


class ListItem extends Component {
  constructor(props) {
    super(props);
    const value = 0;
    this.state = {value,open: false, openDialog: false};
  }
  
  handleBadge = () => {
    console.log(this.state.open)
    this.setState({
      open: true,
    });   
      }

      handleIncrementValue = (nilai) => {
        const value = this.state.value + nilai;
    
        this.setState({ value });
          }

          handleDecrementValue = (nilai) => {
            const value = this.state.value - nilai;
        
            this.setState({ value });
              }
  
  handleClose = (reason) => { 
    console.log(this.state.value) ;
    if (this.state.value < 1) {
      console.log("Hello")
      this.setState({
        open: false,
      });
    }
  }
  
  handleClickOpen = () => { 
    this.setState({
      openDialog: true,
    });
  }
  

  handleCloseDialog=()=> {
    this.setState({
      openDialog: false,
    });
  }

  render() {
   
   
    const {buahan} = this.props;
    return (
      <div className="ListBuah">
        <ItemBuah clickProduct={this.handleClickOpen} handleBadge={this.handleBadge} handleIncrement={this.handleIncrementValue} handleDecrement={this.handleDecrementValue} handleClose={this.handleClose}/>
        <ItemBuah clickProduct={this.handleClickOpen} handleBadge={this.handleBadge} handleIncrement={this.handleIncrementValue} handleDecrement={this.handleDecrementValue} handleClose={this.handleClose}/>
        <ItemBuah clickProduct={this.handleClickOpen} handleBadge={this.handleBadge} handleIncrement={this.handleIncrementValue} handleDecrement={this.handleDecrementValue} handleClose={this.handleClose}/>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.open}
        onClose={this.handleClose}
        autoHideDuration={0}
      >
        <FloatingBadge
          value={this.state.value}
        />
      </Snackbar>
      <Dialog maxWidth={"xs"} fullWidth={true} open={this.state.openDialog} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogContent  classes={{root:"PopupProduct"}}>
        <Grid item xs container direction="column" justify="center">
          <Grid item xs>
                <img className="ProductImageDetail" src={ProductImageDetail} />
              </Grid>  
              <Grid item xs>
              <div className="JudulPopup">
                  Mangga
                </div>
                <div className="DeskripsiPopup">
                  Mangga enak
                </div>
              </Grid>  
              <Grid item xs>
              <Grid item xs container direction="row">
              <Grid item container xs justify="flex-start">
              <div className="HargaPopup">
                  Harga
                </div>
            </Grid>
            <Grid item container xs justify="flex-end">
            <div className="HargaPopup">
                  Rp. 5000
                </div>
            </Grid>
              </Grid>
              </Grid>  
            </Grid>
        </DialogContent>
        <DialogActions>
        <Grid item container xs justify="center">
        <ButtonCart nama="Tambahkan ke keranjang"/>
            </Grid>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
}

ListItem.propTypes = {
  buahan: PropTypes.object,
};

export default ListItem;
