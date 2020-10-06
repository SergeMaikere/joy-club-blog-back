const Post = require('../models/post');

exports.getAllPosts = (req, res, next) => {
	Post.find()
	.then( posts => res.status(200).json(posts) )
	.catch( error => res.status(400).json({error}) )
}

exports.getOnePost = (req, res, next) => {
	Post.findOne( {_id: req.params.id} )
	.then( post => res.status(200).json(post) )
	.catch( error => res.status(400).json({error}) )
	
}

exports.removeOnePost = (req, res, next) => {
	Post.findOne( {_id: req.params.id} )
	.then(
		Post.deleteOne( {_id: req.params.id} )
		.then( () => res.status(200).json({message: 'Post deleted'}) )
		.catch( error => res.status(400).json({error}) )
	)
	.catch( error => res.status(500).json({error}) )
}

exports.addOnePost = (req, res, next) => {
	const post = new Post( {...req.body} )

	post.save( { ...req.body } )
	.then( () => res.status(200).json({message: 'Post created'}) )
	.catch( error => res.status(500).json({error}))
}

exports.updateOne = (req, res, next) => {
	const post = new Post(
		{
			...JSON.parse(req.body),
			_id: req.params.id
		}
	)

	Post.updateOne( {_id: req.params.id}, post )
	.then( () => res.status(200).json({message: 'Post updated'}) )
	.catch( error => res.status(400).json({error}))
}