import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonLove from './ButtonLove.jsx';
import ButtonBeli from './ButtonBeli.jsx';
import Grid from '@material-ui/core/Grid';
import '../Home.css';
import gambar from '../img/ProductImage.png';
import InputNumber from 'react-input-just-numbers';
import Input from '@material-ui/core/Input';

class FieldInputQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <InputNumber className={"FieldInput FieldInput-text"} onlydigits placeholder="1" value={value}
            onChange={onChange}
            />
    </div>
    );
  }
}

FieldInputQuantity.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default FieldInputQuantity;
