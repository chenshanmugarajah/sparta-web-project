console.log("Cursor JS loaded")

var ball = document.getElementById('ball')

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    ball.style.left = x + "px";
    ball.style.top = y + "px";
})