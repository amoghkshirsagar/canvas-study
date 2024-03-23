var Line = function (p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.color = 'black';
}
Line.prototype.setColor = function (color) {
    this.color = color;
}

Line.prototype.setColor = function (color) {
    this.color = color;

    return this;
}
Line.prototype.draw = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
}