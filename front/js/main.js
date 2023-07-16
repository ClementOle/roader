let map;

function exportArray() {
    console.log(JSON.stringify(map))
}

function importArray() {
  map = JSON.parse(data);
}

window.onload = () => {
  importArray();
  createRectangleOfSize(50);
  test();
}
