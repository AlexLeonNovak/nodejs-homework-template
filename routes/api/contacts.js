const express = require('express');
const router = express.Router();
const ContactsController = require('../../controllers/contacts');
const {validation} = require('../../middlewares');
const {create, update} = require('../../validations/contacts');

router.get('/', ContactsController.getAll);
router.get('/:contactId', ContactsController.getById);
router.post('/', validation(create), ContactsController.create);
router.delete('/:contactId', ContactsController.remove);
router.patch('/:contactId', validation(update), ContactsController.update);

module.exports = router
