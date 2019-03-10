import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Area = function({area}){
  return( area !== undefined && <Typography component="p" className="area">{area} sq. fr.</Typography>)
}
Area.propTypes = {
  area: PropTypes.number,
};
export default Area;