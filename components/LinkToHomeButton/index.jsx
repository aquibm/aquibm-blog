import React from 'react'
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'

import './style.css'

const LinkToHomeButton = () => {
	return (
		<div>
			<Link className="go-home" to={prefixLink('/')}>Home</Link>
        </div>
	);
};

export default LinkToHomeButton;