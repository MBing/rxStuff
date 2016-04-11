var $input = $('#input'),
	$result = $('#resutls');

var keyups = Rx.Observable
				.fromEvent($input, 'keyup')
				.map( e => e.target.value)
				.filter(text => text.length > 2);

var throttled = keyups.throttle(500);
var distinct = throttled.distinctUntilChanged();

