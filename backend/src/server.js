const app = require("./app");
require('dotenv').config({ path: `${process.cwd()}/.env` });

const port = process.env.APP_PORT || 3000;

console.log(`Current working directory: ${process.cwd()}`);
console.log(`App port: ${process.env.APP_PORT}`);

app.listen(port, () => {
    console.log(`Api running on port ${port}`)
})