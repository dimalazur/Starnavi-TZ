import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Address = function({address}){
  return(<Typography component="p" className="address">{address}</Typography>)
}
Address.propTypes = {
  address: PropTypes.string.isRequired
};
export default Address;