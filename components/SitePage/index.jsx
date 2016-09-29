import React, { PropTypes } from 'react'

import SiteSidebar from '../SiteSidebar'
import './style.css';

const SitePage = ({ route, location }) => {
	const page = route.page.data;

	return (
		<div>
			<SiteSidebar location={location} />
			<div className="content">
				<div className="main">
					<div className="main-inner">
						<div className="blog-page">
							<div className="text">
								<h1>{ page.title }</h1>
								<div dangerouslySetInnerHTML={{__html: page.body}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SitePage.propTypes = {
    route: PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
}

export default SitePage;