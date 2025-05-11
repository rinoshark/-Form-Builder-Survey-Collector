const mongoose = require('mongoose');

// Define the schema for individual fields
const fieldSchema = new mongoose.Schema({
    type: { type: String, required: true }, // e.g., 'text', 'email', 'dropdown', etc.
    label: { type: String, required: true }, // Label for the field
    required: { type: Boolean, default: false }, // Whether the field is required
    options: { type: [String], default: [] }, // Options for dropdowns or checkboxes
    conditional: { type: Object, default: null } // Conditions for showing/hiding fields
});

// Define the main form schema
const formSchema = new mongoose.Schema({
    title: { type: String, required: true },
    fields: { type: [fieldSchema], required: true }, // Use the field schema defined above
    status: { type: String, enum: ['Open', 'Closed', 'Scheduled'], default: 'Open' },
    scheduledDate: { type: Date },
    password: { type: String, default: null },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
    createdAt: { type: Date, default: Date.now }
});

// Export the Form model
module.exports = mongoose.model('Form', formSchema);
