const express = require("express");
const cors = require("cors");
const uuidv1 = require('uuid/v1');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const app = express();
const contacts = require("./routes/contactsRoute.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = express.Router();
app.use(cors())

routes.use('/contacts', contacts);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
})

app.use('/', routes);

const port = 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
})