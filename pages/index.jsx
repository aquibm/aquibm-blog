import React, { PropTypes } from 'react'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'

import { config } from 'config'
import SiteSidebar from '../components/SiteSidebar'
import PostSummary from '../components/PostSummary'

const SiteIndex = ({ route, location }) => {
	let posts = route.pages.filter((page) => {
		return access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post';
	});

	posts = sortBy(posts, (post) => {
		return access(post, 'data.date');
	}).reverse();

	return (
		<DocumentTitle title={config.siteTitle}>
			<div>
				<SiteSidebar location={location} />
				<div className="content">
					<div className="main">
						<div className="main-inner">
							{
								posts.map((post, i) => {
									return <PostSummary key={i} post={post} />
								})
							}
						</div>
					</div>
				</div>
			</div>
		</DocumentTitle>
	);
};

SiteIndex.propTypes = {
    route: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default SiteIndex;