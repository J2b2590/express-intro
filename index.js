const express = require('express');
const app     = express(); // so now app is an object witha bunch of methods
//to build a server



app.get('/', (request, response) =>{
	response.send('Hi im the information the sever has sent to the client')



})

app.get('/tacos', (req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})


app.get('/nothingIsReal', (req, res) =>{
	res.json({
		"ok": "wow"
		
	})
})



app.listen(3000, () => {

	console.log('i am listening i am port 3000')
})

