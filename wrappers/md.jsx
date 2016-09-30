import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'

import { config } from 'config'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'

const MarkdownWrapper = ({ route, location }) => {
	const layout = access(route.page, 'data.layout');
	const postTitle = access(route.page, 'data.title');

	return (
		<DocumentTitle title={`${postTitle} - ${config.siteTitle}`}>
			<div>
				{ layout === 'page' ? <SitePage route={route} location={location} /> : <SitePost route={route} /> }
			</div>
		</DocumentTitle>
	);
};

MarkdownWrapper.propTypes = {
    route: PropTypes.object.isRequired
};

export default MarkdownWrapper;