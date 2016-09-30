import React from 'react'
import { config } from 'config'

import './style.css'
import '../../static/fonts/fontawesome/style.css'

const SiteLinks = () => {
	return (
		<div className="blog-social">
			<ul>
				<li>
					<a href={ config.siteGithubUrl } target="_blank"><i className="fa fa-github"></i></a>
				</li>

				<li>
					<a href={ config.siteEmailUrl } target="_blank"><i className="fa fa-envelope-o"></i></a>
				</li>

				<li>
					<a href={ config.siteTelegramUrl } target="_blank"><i className="fa fa-paper-plane"></i></a>
				</li>

				<li>
					<a href={ config.siteRssUrl } target="_blank"><i className="fa fa-rss"></i></a>
				</li>
			</ul>
		</div>
	);
};

export default SiteLinks;