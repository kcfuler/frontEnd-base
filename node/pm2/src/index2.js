const express = require('express');

const app = express()

app.get('/index2', (req, res) => {
	res.json({
		code: 200,
		message: "kcp"
	})
})

app.listen(8888, () => {
	console.log('index2.js =======> ', 'http://localhost:8888/index2')
})
