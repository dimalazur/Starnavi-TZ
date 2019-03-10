import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TemplateControls = function({onChangeCardTemplate,templateName}){
	const changeTemplate = (e) => {
		e.preventDefault();
	    let templateName = e.currentTarget.dataset.template;
	    onChangeCardTemplate(templateName);
	}
	return(
		<React.Fragment>
		<Typography component="h2" className="template-title">{templateName} Template</Typography>
		<div className="template-controls">
		  <Button variant="contained" color="default" className="btn-change" onClick={ changeTemplate } data-template="Default" >Default</Button>
		  <Button variant="contained" color="primary" className="btn-change" onClick={ changeTemplate } data-template="Primary">Primary</Button>
		  <Button variant="contained" color="secondary" className="btn-change" onClick={ changeTemplate } data-template="Secondary">Secondary</Button>
		</div>
		</React.Fragment>
	)
}
TemplateControls.propTypes = {
  onChangeCardTemplate: PropTypes.func.isRequired,
};
export default TemplateControls;