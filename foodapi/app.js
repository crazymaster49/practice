onst = express = require('express')
const app = new express();
const PORT = 3000;

app.listen(PORT, () => console.log("hello", PORT))
