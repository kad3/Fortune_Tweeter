
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tweeter Fortune Teller', tweets: '' })
};

exports.add_fortune = function(req, res) {
	res.render('add-fortune', {});
};
