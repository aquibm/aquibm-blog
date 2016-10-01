import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import './style.css'

class SiteNav extends React.Component {
	getHighlightClass(path) {
		return this.props.location.pathname === prefixLink(path) ? 'current' : '';
	}

	renderLinks() {
		const links = [
			{name: 'Home', route: '/'},
			{name: 'About', route: '/about/'}
		];

		return (
			<ul>
				{links.map((link, i) => {
					return (
						<li key={i}>
							<Link to={link.route} className={this.getHighlightClass(link.route)}>{link.name}</Link>
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		return (
			<nav className="blog-nav">
				{ this.renderLinks() }
			</nav>
		);
	}
}

SiteNav.propTypes = {
	location: PropTypes.object.isRequired
};

export default SiteNav;