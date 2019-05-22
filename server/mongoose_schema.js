const database = require("./mongo");

const schema = database.Schema;

const animals = new schema({
  name: { type: String },
  legs: { type: Number },
  sound: { type: String}
});

const dataRow = database.model('DATA', animals);

module.exports = dataRow;