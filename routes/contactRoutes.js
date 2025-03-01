const express = require('express');
const { getContact, createContact, putContact, deleteContact, getSingleContact } = require('../controllers/contactController')
// You should define the brackets and the words inside the brackets 
const router = express.Router();

router.route('/').get(getContact).post(createContact);

router.route('/:id').put(putContact).delete(deleteContact).get(getSingleContact);



module.exports = router;



/*


router.get('/', getContact);

router.post('/', createContact)

router.put('/:id', putContact);

router.delete('/:id', deleteContact);

router.delete('/:id', getContact);

This is the normal way
*/