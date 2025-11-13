var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
function call(direction) {
    console.log("Hello ".concat(Direction[direction].toLowerCase()));
}
call(Direction.Down);
