var Quad = function(p1, p2, p3, p4) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.color = 'black';
}

Quad.prototype.draw = function(ctx) {
    new Line(this.p1,this.p2).draw(ctx);
    new Line(this.p2,this.p3).draw(ctx);
    new Line(this.p3,this.p4).draw(ctx);
    new Line(this.p4,this.p1).draw(ctx);
}

var Rect = function(p1, w, h) {
    this.p1 = p1;
    this.w = w;
    this.h = h;
    this.color = 'black';
}

Rect.prototype.draw = function(ctx) {
    this.p2 = new Point(this.p1.x + this.w, this.p1.y);
    this.p3 = new Point(this.p1.x + this.w, this.p1.y + this.h);
    this.p4 = new Point(this.p1.x, this.p1.y + this.h);
    new Quad(this.p1, this.p2, this.p3, this.p4).draw(ctx);
}

var Rect2 = function(p1, p3) {
    this.p1 = p1;
    this.p3 = p3;
    this.p2 = new Point(p1.x, p3.y);
    this.p4 = new Point(p3.x, p1.y);
    this.color = 'black';
    this.quad = new Quad(this.p1, this.p2, this.p3, this.p4);
}

Rect2.prototype.draw = function(ctx) {
    this.quad.draw(ctx);
}