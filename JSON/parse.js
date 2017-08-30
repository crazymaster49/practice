var fs = require("fs")

fs.readFile('name.json', "utf8", (err, data) => {
  if (err) throw err;

	json = JSON.stringify(data);
	newnames = JSON.parse(json);
	console.log(newnames);

});
