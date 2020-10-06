const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
	{
		userId: { type: String, required: true },
		title: { type: String, required: true },
		content: { type: String, required: true },
		created_at: { type: Date, required: true },
		loveIts: { type: Number, required: true }
	}
)

module.exports = mongoose.model( 'Post', postSchema )

