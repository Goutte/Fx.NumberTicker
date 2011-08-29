Fx.Ticker
=========

Make a number in the innerText of a DOM Element smoothly change from one value to another.
This is like tweening a style value, but instead you tween the content value.

![Screenshot](http://url_to_project_screenshot)

How to use
----------

HTML
    <span id="myCounter">0</span>

JS
    // Create the Ticker like any other Fx
    var ticker = new Fx.Ticker('myCounter');
    ticker.start(0,100);

    // or use shorthand version
    // $('myCounter').ticker(100);

