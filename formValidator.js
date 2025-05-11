const { body } = require('express-validator');

const formValidator = [
    body('title').notEmpty().withMessage('Title is required'),
    body('fields').isArray().withMessage('Fields must be an array'),
    // Add more field validations as needed
];

module.exports = formValidator;
