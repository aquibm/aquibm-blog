import React, { PropTypes } from 'react'
import moment from 'moment'

import LinkToHomeButton from '../LinkToHomeButton'

import './style.css'
import '../../static/css/highlight.css'

const SitePost = ({ route }) => {
	const post = route.page.data;

	return (
		<div>
			<LinkToHomeButton />
			<div className="blog-single">
				<div className="text">
					<h1>{post.title}</h1>

					<div dangerouslySetInnerHTML={{__html: post.body}} />

				</div>

				<div className="footer">
					<div className='date-published'>
						<em>Published { moment(post.datePublished).format('D MMM YYYY') }</em>
					</div>
				</div>
			</div>
		</div>
	);
};

SitePost.propTypes = {
    route: PropTypes.object.isRequired
}

export default SitePost;