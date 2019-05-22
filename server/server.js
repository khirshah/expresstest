//---------------------- INIT ---------------------------------
//---------------------- express -------------------------
const express = require('express');
const app = express();
const PORT = 3000;
//-------------------- body parser -----------------------
const bodyParser = require('body-parser');
//------------------- async ------------------------------
const asyncHandler = require('express-async-handler');
//-------------------- database --------------------------
const mongoose = require('./mongo');
const dataRow = require('./mongoose_schema');

//------------------- server app -------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) => {
	dataRow.find({}, (err,data) => {
		
		console.log(data);

		res.send(data);
	})
	
})

app.post("/post",asyncHandler(async(req, res) => {
	
	console.log(req.body);
	
	const row = await new dataRow(req.body.animal);
	
	const f = await row.save();
	
	res.send();

}));

app.listen(PORT, () => {

	console.log(`app is listening on port ${PORT}`);

});
