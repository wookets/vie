
require("babel-register");

const express = require('express')
const app = express()

const layout = require('./src/layout').layout;

app.get('/', function (req, res) {
	// take query param for page and load page-*.json
	const pageConfig = require(`./src/__mockdata__/page-${req.query.page || 'target'}.json`);
	// take query param for user and load user-*.json
	const user = require(`./src/__mockdata__/user-${req.query.user || 'mobile-prime'}.json`);
	// run layout engine
	const html = layout(pageConfig, user);

	res.send(html)
})

app.listen(3000, function () {
	console.log('Vie listening on port 3000!')
})
