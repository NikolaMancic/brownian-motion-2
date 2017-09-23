var scale = 2;
var step = 2;
var size = 300;

var canvas = document.getElementById('canvas');

var W = canvas.width = size * scale;
var H = canvas.height = size * scale;

var ctx = canvas.getContext('2d');

var Point = function(color) {
    'use strict';

    this.x = Math.floor(Math.random() * W);
    this.y = Math.floor(Math.random() * H);

    this.color = color;
};

Point.prototype.reset = function() {
    'use strict';

    this.x = Math.floor(Math.random() * W);
    this.y = Math.floor(Math.random() * H);
};

Point.prototype.move = function() {
    'use strict';

    function nextPosition() {
        return Math.floor(Math.random() * 3) - 1;
    }

    this.x += nextPosition() * scale * step;
    this.y += nextPosition() * scale * step;
};

Point.prototype.draw = function() {
    'use strict';

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, scale, scale);
};

var points = [];

points.push(new Point('rgba(255, 255, 255, 0.1)'));

function draw() {
    'use strict';

    for(var i = 0; i < points.length; i++) {
        points[i].draw();
        points[i].move();

        if(points[i].x < 0 || points[i].x > W ||
            points[i].y < 0 || points[i].y > H) {

            points[i].reset();
        }
    }

    window.requestAnimationFrame(draw);
}

draw();
