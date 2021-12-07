window.onload = draw;
function draw() {
    let myCanvas = document.getElementById("myCanvas");
    if (myCanvas.getContext) {
        let ctx = myCanvas.getContext('2d');
        update(ctx);
    } else {
        alert("Canvas is not supported.");
    }
}
let angle = 0;
function update(ctx) { 
    ctx.save();

    let clock = new Image();
    clock.addEventListener('load', function () {
        ctx.clearRect(0, 0, 400, 300);
        ctx.drawImage(clock, 70, 20, 260, 260);
    }, false);

    clock.src = 'img/clock.png'; 

    ctx.translate(200, 150);
    ctx.rotate((Math.PI / 180) * angle);
    ctx.translate(-200, -150);
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 30);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(250, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 45);
    ctx.stroke();

    angle++;
    requestId = requestAnimationFrame(function () {
        update(ctx);
    });
}