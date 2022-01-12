const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		firstName: { type: String, required: true, unique: true },
		lastName: { type: String, required: true, unique: true },
		password: { type: String, required: true, unique: true },
	},
	{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
