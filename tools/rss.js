import glob from 'glob';
import fs from 'fs';
import frontMatter from 'front-matter';
import Feed from 'feed';

const baseSitePath = 'http://www.aquibm.com';

const author = {
	name: 'Aquib Master',
	link: baseSitePath
};

let feed = new Feed({
	id: baseSitePath + '/',
	title: 'Aquib Master - Blog',
	description: 'Web Developer from Auckland, New Zealand.',
	link: baseSitePath,
	copyright: 'Copyright (c) Aquib Master 2016 - present. All rights reserved',
	updated: new Date(),
	author: author
});

function generateFeeds() {
	const markdownFiles = glob.sync('./pages/**/*.md');

	markdownFiles.forEach((file) => {
		addToFeed(file);
	});

	fs.writeFileSync('./public/rss.xml', feed.render('rss-2.0'));
	fs.writeFileSync('./public/atom.xml', feed.render('atom-1.0'));
}

function addToFeed(fileName) {
	const data = fs.readFileSync(fileName, 'utf8');
	const content = frontMatter(data);
	const meta = content.attributes;

	if(!meta.layout || meta.layout !== 'post') {
		return;
	}

	feed.addItem({
		id: baseSitePath + meta.path,
		title: meta.title,
		link: baseSitePath + meta.path,
		description: meta.description,
		date: new Date(meta.date),
		author: author
	});
}

generateFeeds();