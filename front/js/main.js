/*import mapArray from 'main_svg.js';
//var mapArray = new Array(10).fill(new Array(10).fill(false)); 

console.log(mapArray);

function showArray() {
  let div = document.createElement("table");
  
  for(let i = 0; i < mapArray.length; i++) {
    let tr = document.createElement("tr");
    for(let j = 0; j < mapArray[i].length; j++) {
      let node = document.createElement("td");
      node.innerText = "A";
      node.id = i + ";" + j;
      node.addEventListener('click', event => changeColor(node.id));
      node.style = 'background-color: red';
      tr.appendChild(node);
    }
    div.appendChild(tr);
  }
  document.getElementById("container").appendChild(div);
}

function changeColor(id) {
  let i = id.substring(0, 1);
  let j = id.substring(2);
  
  this.mapArray[i][j] = !mapArray[i][j];
  let value = !mapArray[i][j];
  
  if(value == false) { 
    document.getElementById(id).style = "background-color: red";
  } else {
    document.getElementById(id).style = "background-color: white";
  }
  
}*/
