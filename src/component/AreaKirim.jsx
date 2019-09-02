import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import '../Home.css';
import lokasi from '../img/lokasi.png'
import peta from '../img/peta.png'

class AreaKirim extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div className="AreaKirim">
        <div className="BoxPengiriman">
        <Grid container spacing={2}>
          <Grid item>
              <img className="PoinLokasi"  src={lokasi} />
          </Grid>
          <Grid item xs={8} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div className="Area-Pengiriman">
                  Area Pengiriman
                </div>
                <div className="Kota-Pengiriman">
                  Jakarta
                </div>
              </Grid>   
            </Grid>
            </Grid>
            <Grid item container xs justify="flex-end">
            <img className="PetaLokasi"  src={peta} />
            </Grid>
        </Grid>
        </div>   
        </div>
      );
    }
  }

AreaKirim.propTypes = {};

export default AreaKirim;
