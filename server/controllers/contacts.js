const contactHandler = {};
const selectAll = `SELECT * FROM CONTACTS`;
const addContact = (contact) => {
    let res = `INSERT INTO CONTACTS (NAME, AGE, ADDRESS, PHONE) VALUES (${JSON.stringify(contact.NAME)}, ${contact.AGE}, ${JSON.stringify(contact.ADDRESS)}, ${contact.PHONE});`
    console.log(res);
    return res; 
}
const deleteContact = (id) => {
    return `DELETE FROM CONTACTS WHERE ID=${id};`
} 

const updateContact = (contact) => {
    let res = `UPDATE CONTACTS SET NAME = "${contact.NAME}", AGE = ${contact.AGE}, ADDRESS = "${contact.ADDRESS}", PHONE =  ${contact.PHONE} WHERE ID=${contact.ID};` 
    console.log(res);
    return res
}

contactHandler.selectAll = selectAll;
contactHandler.addContact = addContact;
contactHandler.deleteContact = deleteContact;
contactHandler.updateContact = updateContact;
module.exports =  contactHandler;