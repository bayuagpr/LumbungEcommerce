import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonLove from './ButtonLove.jsx';
import ButtonBeli from './ButtonBeli.jsx';
import Grid from '@material-ui/core/Grid';
import '../Home.css';
import gambar from '../img/ProductImage.png';
import ButtonBase from '@material-ui/core/ButtonBase';

class ButtonInputQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { icon, onClick } = this.props;
    return (
      <div>
        <ButtonBase className={"IconInputButton"}>
        <img className="IconInput" src={icon} onClick={onClick}/>
        </ButtonBase>
    </div>
    );
  }
}

ButtonInputQuantity.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonInputQuantity;
