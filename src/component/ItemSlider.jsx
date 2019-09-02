import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { namaSlider } = this.props;
    return <div />;
  }
}

ItemSlider.propTypes = {
  namaSlider: PropTypes.string,
};

export default ItemSlider;
