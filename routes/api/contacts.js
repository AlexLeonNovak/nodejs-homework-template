const express = require('express');
const router = express.Router();
const ContactsController = require('../../controllers/contacts');
const validate = require('../../middlewares/validation');
const {create, update} = require('../../validations/contacts');

router.get('/', ContactsController.getAll);
router.get('/:contactId', ContactsController.getById);
router.post('/', validate(create), ContactsController.create);
router.delete('/:contactId', ContactsController.remove);
router.patch('/:contactId', validate(update), ContactsController.update);

module.exports = router
