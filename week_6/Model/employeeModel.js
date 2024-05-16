const mongoose = require('mongoose');

employeeSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	department: {
		type: String, 
		required: true
	},
	position: {
		type: String, 
		required: true
	},
	salary: {
		type: Number,
		required: true
	},
	hireDate: {
		type: Date,
		required: true,
		default: Date.now		
	}
})

const employee = mongoose.model('employee', employeeSchema)

module.exports = employee