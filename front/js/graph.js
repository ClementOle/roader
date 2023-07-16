var open = [];
var road = [];
var visited = [];

function test() {
  open = [];
  let point = new Point(0, 0);
    generateGraph(point); 
    console.log(point)
    let step = 0;
    findRoad(100, 40, point, step);
    console.log(road);
    console.log(step);
}

function generateGraph(point) {
  const neighbours = [
    [point.x, point.y - 1],
    [point.x, point.y + 1],
    [point.x - 1, point.y],
    [point.x + 1, point.y],
  ]; 

  open.push(point);
  changeColorOfOpen(point.x, point.y);
  for(const [x, y] of neighbours) {
    let currentElement = open.filter(a => a.x == x && a.y == y)[0];
    if(currentElement) {
        point.neighbour.push(currentElement);
    } else if (
      !open.includes(`${x}:${y}`)
      && x >= 0
      && y >= 0
      && x < map.length 
      && y < map[x].length 
      && map[x][y] == true 
    ) {
      setTimeout(() => {
        point.neighbour.push(generateGraph(new Point(x, y)));
      }, 250);
    }  
  }
  return point;
}

function findRoad(x, y, point, step) {
  if(point.x == x && point.y == y && visited.filter(a => a.x == x && a.y == y)[0]) {
    return true;
  }
  
  visited.push(point);
  if(point.neighbours) { 
    for(let neighbour of point.neighbours) {
      if(neighbour) {
        let found = findRoad(x, y, neighbour, ++step);
      }
    }
  }
}

class Point {
  x;
  y;  
  neighbour = [];

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


