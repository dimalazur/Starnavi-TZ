import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Price = function({price}){
  return(<Typography component="p" className="price">$ {price}</Typography>)
}
Price.propTypes = {
  price: PropTypes.number.isRequired
};
export default Price;