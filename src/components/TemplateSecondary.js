import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Image from './Image';
import Price from './Price';
import Address from './Address';
import Area from './Area';

const TemplateSecondary = function({house}){
  return(
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card className="house-map-item secondary">
          <Address address={house.full_address} />
          <CardContent className="house-img-holder">
            <Image className="house-map-img" image={house.images[0]} >
              <Price price={house.price}/>
            </Image>
            <div className="house-description">{house.description}</div>
          </CardContent>
          <CardContent className="item-content">
            <Area area={house.area} />
          </CardContent>
        </Card>
      </Grid>
    )
}
TemplateSecondary.propTypes = {
  house: PropTypes.shape({
      id: PropTypes.number.isRequired,
      area: PropTypes.number,
      full_address: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string,
      rating: PropTypes.number,
    }).isRequired
};
export default TemplateSecondary;