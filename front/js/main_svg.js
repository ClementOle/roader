
const map = new Array(50);
for (let i = 0; i < map.length; i++) {
  map[i] = new Array(50).fill(false);
}

// Création d'un rectangle SVG avec gestionnaire d'événement de clic
function createSVGRectangle(width, height, x, y) {
  var rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rectangle.setAttribute("width", width);
  rectangle.setAttribute("height", height);
  rectangle.setAttribute("x", x);
  rectangle.setAttribute("y", y);
  rectangle.setAttribute("stroke", "black");
  if(map[x/20][y/20] == true) {
    rectangle.setAttribute("fill", "white"); // Couleur initiale du rectangle
  } else {
    rectangle.setAttribute("fill", "gray"); // Couleur initiale du rectangle
  }


  rectangle.addEventListener("click", function($event) {
    const rect = $event.currentTarget;    


    const x = rect.getAttribute("x") / 20;
    const y = rect.getAttribute("y") / 20;

    map[x][y] = !map[x][y];
    if (map[x][y] == true) {
      rect.setAttribute("fill", "white");
    } else {
      rect.setAttribute("fill", "gray");
    }
  });

  rectangle.addEventListener("mouseover", function($event) {
    const rect = $event.currentTarget;
    rect.setAttribute("fill", "lightgray"); // Couleur de surbrillance
  });

  rectangle.addEventListener("mouseout", function($event) {
    const rect = $event.currentTarget;

    const x = rect.getAttribute("x") / 20;
    const y = rect.getAttribute("y") / 20;
    
    if (map[x][y] == true) {
      rect.setAttribute("fill", "white");
    } else {
      rect.setAttribute("fill", "gray");
    }
  });

  return rectangle;
}

// Création du rectangle de taille n
function createRectangleOfSize(n) {
  var svgNamespace = "http://www.w3.org/2000/svg";
  var rectangleContainer = document.createElementNS(svgNamespace, "svg");
  var rectangleSize = 20; // Taille du rectangle intérieur
  var containerSize = n * rectangleSize; // Taille du rectangle conteneur

  rectangleContainer.setAttribute("width", containerSize);
  rectangleContainer.setAttribute("height", containerSize);

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var x = j * rectangleSize;
      var y = i * rectangleSize;
      var rectangle = createSVGRectangle(rectangleSize, rectangleSize, x, y);
      rectangleContainer.appendChild(rectangle);
    }
  }

  document.body.appendChild(rectangleContainer); // Ajout du rectangle à la page HTML
}

function test() {
  console.log(map)
}
