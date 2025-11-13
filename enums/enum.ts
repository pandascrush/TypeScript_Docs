enum Direction{
    Up,
    Down,
    Right,
    Left
}

function call(direction){
    console.log(`Hello ${Direction[direction].toLowerCase()}`);
}

call(Direction.Down)