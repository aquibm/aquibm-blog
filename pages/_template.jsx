import React, { PropTypes } from 'react'

import '../static/css/reset.css'
import '../static/css/base.css'
import '../static/css/typography.css'

const Template = ({ children }) => {
	return (
		<div className="wrapper">
			{ children }
		</div>
	);
};

Template.propTypes = {
    children: PropTypes.object.isRequired
};

export default Template;