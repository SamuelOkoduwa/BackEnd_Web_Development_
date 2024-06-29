const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
	name: {
	type: String,
	required: true
  },
  email: {
	type: String,
	required: true
  },
  password: {
	type: String,
	required: true
  },
  balance: {
	type: Number,
	default: 0
  },
  active: {
	type: Boolean,
	default: true
  },
  role: {
	type: String,
	default: 'user'
  },
}, {timestamps: true});

const Users = mongoose.model('Users', modelSchema);

module.exports = Users;