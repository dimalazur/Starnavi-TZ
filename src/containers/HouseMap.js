import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { getHouseMapRequest, changeCardTemplate } from '../actions/actions';
import TemplateControls from '../components/TemplateControls';
import TemplateDefault from '../components/TemplateDefault';
import TemplatePrimary from '../components/TemplatePrimary';
import TemplateSecondary from '../components/TemplateSecondary';


class HouseMap extends Component {
  componentDidMount(){
    const {onGetHouseMapRequest} = this.props;
    onGetHouseMapRequest();
  }
   
  render() {
    const {houseMapList, templateName, onChangeCardTemplate} = this.props;
    const DisplayTemplate = houseMapList.map(house => (
              ( templateName === 'Default' && <TemplateDefault key={house.id} house={house} /> ) ||
              ( templateName === 'Primary' && <TemplatePrimary key={house.id} house={house} /> ) ||
              ( templateName === 'Secondary' && <TemplateSecondary key={house.id} house={house} /> ) 
            ));   

  return (
      <div className="house-map-holder">
        <div className="wrap">
          <TemplateControls onChangeCardTemplate={onChangeCardTemplate} templateName={templateName} />
          <Grid container spacing={40} >
            {DisplayTemplate}
          </Grid> 
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
   houseMapList: state.houseMapStore.houseMapList,
   templateName: state.houseMapStore.templateName
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetHouseMapRequest: (payload) => {
      dispatch(getHouseMapRequest(payload))
    },
    onChangeCardTemplate: (payload) => {
      dispatch(changeCardTemplate(payload))
    }
  }
}

HouseMap.propTypes = {
  houseMapList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      area: PropTypes.number,
      full_address: PropTypes.string.isRequired,
      price: PropTypes.number.isRewuired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string,
      rating: PropTypes.number,
    })).isRequired,
  templateName: PropTypes.string.isRequired,
  onGetHouseMapRequest: PropTypes.func.isRequired,
  onChangeCardTemplate: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseMap);