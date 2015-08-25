var test = require('tape');
var TWEEN = require('./');
var Tween = TWEEN.Tween;

test('tween', function(t) {
	t.ok(TWEEN !== null);
	t.ok(TWEEN.getAll() instanceof Array);
	t.end();
});

test('constructor', function(t) {
	var tw = new Tween({});
	t.ok(tw instanceof Tween);
	t.end();
});
