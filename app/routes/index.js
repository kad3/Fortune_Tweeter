
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tweeter Fortune Teller', layout: false})
};

exports.dashboard = function(req, res){
  res.render('dashbord', { title: 'Tweeter Fortune Teller'})
};

exports.create_fortune = function(req, res) {
	res.render('createFortune', {});
};
