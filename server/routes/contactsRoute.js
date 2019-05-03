const express = require("express");
const contacts = express.Router();
const mysql = require("mysql");
const contactHandler = require("../controllers/contacts.js");

let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "danny312$",
    database: 'CONTACTS'
})

//get all contacts
contacts.get('/', (req, res) => {
    connection.query(contactHandler.selectAll, (err, results) => {
        if(err) {
            res.status(404).send(err);
        } else {
            res.status(200).send({
                data: results
            })
        }
    })
})

//add contact
contacts.post('/add', (req, res) => {
    let contact = req.body.contact;
    console.log(contact)
    connection.query(contactHandler.addContact(contact), (err, results) => {
        if(err) {
            console.log(err)
            res.status(404).send(err);
        } else {
            console.log("no err")
            res.status(200).send({
                data: results
            })
        }
    })
})

//delete contact
contacts.delete('/delete/:id', (req, res) => {
    let contact = req.body.contact;
    console.log("hit delete", contact.ID);
    connection.query(contactHandler.deleteContact(contact.ID), (err, results) => {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        } else {
            console.log("no err")
            res.status(200).send({
                data: results
            })
        }
    })
})

//update contact
contacts.put('/update/:id', (req, res) => {
    let contact = req.body.newValues;
    console.log(req.body)
    console.log("hit")
    connection.query(contactHandler.updateContact(contact), (err, results) => {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        } else {
            console.log("no err")
            res.status(200).send({
                data: results
            })
        }
    })
})

module.exports = contacts;