import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';

const Image = function({className, image, children}){
  return(
  	<React.Fragment>
	  	<CardMedia className={className} image={image} component="img"></CardMedia>
	  	{children}
  	</React.Fragment>
  	)
}
Image.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  children: PropTypes.node,
};
export default Image;