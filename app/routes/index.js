
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tweeter Fortune Teller'})
};

exports.dashboard = function(req, res){
  res.render('dashbord', { title: 'Tweeter Fortune Teller'})
};

exports.add_fortune = function(req, res) {
	res.render('add-fortune', {});
};
