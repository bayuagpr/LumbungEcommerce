import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Home.css'
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';


class ButtonBeli extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {nama, onClick} = this.props;
    return (
      <div><ButtonBase className={"ButtonBaseBeli"}>
        <Grid className={"Button"} container justify="center" alignItems="center"><div className="Button-beli" onClick={onClick}>{nama}</div></Grid>
        
      </ButtonBase>
        
      </div>
    );
  }
}

ButtonBeli.propTypes = {
  nama: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonBeli;
