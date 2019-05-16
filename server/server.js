const express = require('express');
const app = express();
const PORT = 3000;

app.get("/",(req, res) => {
	res.send("yaayyy");
})

app.listen(PORT, () => {
	console.log(`app is listening on port ${PORT}`)
});
