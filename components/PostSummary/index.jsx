import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'

const PostSummary = ({ post }) => {
	const title = access(post, 'data.title') || post.path;
    const description = access(post, 'data.description');
    const datePublished = access(post, 'data.date');
    const category = access(post, 'data.category');
    
	return (
		<div className="blog-post">
			<time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
            	{ moment(datePublished).format('MMMM YYYY') }
			</time>
			<span style={{padding: '5px'}}></span>
			<sppan className="blog-category">{ category }</sppan>

			<h2><Link style={{borderBottom: 'none'}} to={prefixLink(post.path)} >{ title }</Link></h2>

			<p dangerouslySetInnerHTML={{__html: description}} />
			<Link className='readmore' to={prefixLink(post.path)}>Read</Link>
		</div>
	);
};

PostSummary.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostSummary;