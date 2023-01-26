const express = require('express')

const app = express()

app.get('/index', (req, res) => {
	res.json({
		code: 200,
		message: "kcp"
	})
})

app.listen(9999, () => {
	console.log('index.js =======> ', 'http://localhost:9999/index')
})
