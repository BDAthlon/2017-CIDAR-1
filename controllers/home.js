/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    layout: 'layout'
  });
};

exports.newglyph = function (req, res) {
    res.render('submitglyph', { title: 'Submit Glyph', layout: 'layout' })
};

exports.browse = function (req, res) {
    res.render('browse', { title : 'Browse' });
}