const { body } = require('express-validator');

const responseValidator = [
    body('formId').notEmpty().withMessage('Form ID is required'),
    body('responses').isObject().withMessage('Responses must be an object'),
    // Add more response validations as needed
];

module.exports = responseValidator;
