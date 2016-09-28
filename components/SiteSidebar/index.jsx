import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import SiteNav from '../SiteNav'
import SiteLinks from '../SiteLinks'

import './style.css'
import profilePic from '../../pages/photo.jpg'

class SiteSidebar extends React.Component {
	renderHeader() {
		return (
			<header>
				<Link to={prefixLink('/')} className="sidebar__siderbar-inner__blog-details__header__link">
					<img src={prefixLink(profilePic)} alt="Aquib Master - Profile Picture" width="75" height="75"/>
				</Link>

				<h2><Link to={prefixLink('/')}>{ config.siteAuthor }</Link></h2>

				<p>
					{ config.siteDescr }
				</p>
			</header>
		);
	}

    render() {
        return (
        	<div className="sidebar">
        		<div className="sidebar-inner">
        			<div className="blog-details">
        				{ this.renderHeader() }
        			</div>

        			<div className="blog-options">
        				<SiteNav {...this.props} />
        				<SiteLinks />
        			</div>
        		</div>
        	</div>
        );
    }
}

SiteSidebar.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteSidebar