var test = require('tape');
var tween = require('./');

var TWEEN = tween.TWEEN;

test('TWEEN', function(t) {
	t.ok(TWEEN !== null);
	t.ok(TWEEN.getAll() instanceof Array);
	t.end();
});
