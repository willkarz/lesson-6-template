var Post = require('./../models/post');

module.exports = {
  index: function(req, res) {
    console.log('posts index');
    res.json( Post.all() );
  },
  show: function(req, res) {
    console.log('posts index');
    res.json( Post.find( req.params.id ) );
  },
  create: function(req, res) {
    console.log('posts create', req.params, req.body);
  },
  update: function(req, res) {
    console.log('posts update', req.params, req.body);
  },
  destroy: function(req, res) {
    console.log('posts destroy', req.params, req.body);
  }
};