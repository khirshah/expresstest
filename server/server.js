const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) => {
	res.send("yaayyy");
})

app.post("/post",(req, res) => {
	console.log(req.body);
	res.send();
})

app.listen(PORT, () => {
	console.log(`app is listening on port ${PORT}`)
});
