Fx.Ticker
=========

![Logo](http://github.com/Goutte/Fx.Ticker/raw/master/Docs/fx-ticker.png)

Make a number in the innerText of a DOM Element smoothly change from one value to another.
This is like tweening a style value, but instead you tween the html content integer value.

You may also provide a transformation function in the options, which is useful for prepending zeroes
or simulating float values for example.


How to use
----------

``` html
<span id="myCounter">0</span>
```

``` javascript
// Create the Ticker like any other Fx
var ticker = new Fx.Ticker('myCounter');
ticker.start(0,100);

// or use shorthand version
$('myCounter').ticker(100);

// also, you can provide all of Fx options, plus a transformer function :
$('myCounter').ticker(100, {
    duration: 5000,
    transformer: function(i) {
        // Prefix with zeroes so we have a 5 digits number
        return (Array(5).join('0') + i).slice(-5);
    }
});
```
