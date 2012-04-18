
/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.render('index', { title: 'Express' })
  res.send('sup.');
};

exports.add_fortune = function(req, res) {
	res.render('add-fortune', {});
};