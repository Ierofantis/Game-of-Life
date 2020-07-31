function twodGrid(rows) {
  var arr = [];
  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }
  return arr;
}

var arr = twodGrid(400);
var arr2 = twodGrid(400);
// arr[50][2] = 5;
// console.log(arr);
var textArray = ["X", "Y"];
//var randomIndex = Math.floor(Math.random() * textArray.length);
//var randomElement = textArray[randomIndex];
var neighboor = [];
tick(); //call main loop

//functions
function tick() {
  //main loop
  drawGrid();
  updateGrid();
  requestAnimationFrame(tick);
}
function drawGrid() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.clearRect(0, 0, 400, 400);
  for (var i = 0; i < 400; i++) {
    for (var j = 0; j < 400; j++) {
      var randomIndex = Math.floor(Math.random() * textArray.length);
      var randomElement = textArray[randomIndex];
      arr[i][j] = randomElement;
      if (arr[i][j] === "X") {
        ctx.fillStyle = "#FF0000";

        ctx.fillRect(i, j, 1, 1);
      }
    }
  }
}
//array[i-1][j]
//array[i][j-1]
//array[i-1][j-1]
//array[i+1][j]
//array[i][j+1]
//array[i+1][j+1]
//array[i+1][j-1]
//array[i-1][j+1]

function updateGrid() {
  //perform one iteration of grid update
  for (var j = 1; j < arr - 1; j++) {
    //iterate through rows
    for (var k = 1; k < arr - 1; k++) {
      //iterate through columns
      var totalCells = 0;
      //add up the total values for the surrounding cells
      totalCells += arr[i - 1][j - 1]; //top left
      totalCells += arr[j - 1][k]; //top center
      totalCells += arr[j - 1][k + 1]; //top right

      totalCells += arr[j][k - 1]; //middle left
      totalCells += arr[j][k + 1]; //middle right

      totalCells += arr[j + 1][k - 1]; //bottom left
      totalCells += arr[j + 1][k]; //bottom center
      totalCells += arr[j + 1][k + 1]; //bottom right

      //apply the rules to each cell
      if (arr[j][k] === 0) {
        switch (totalCells) {
          case 3:
            arr2[j][k] = 1; //if cell is dead and has 3 neighbours, switch it on
            break;
          default:
            arr2[j][k] = 0; //otherwise leave it dead
        }
      } else if (arr[j][k] === 1) {
        //apply rules to living cell
        switch (totalCells) {
          case 0:
          case 1:
            arr2[j][k] = 0; //die of lonelines
            break;
          case 2:
          case 3:
            arr2[j][k] = 1; //carry on living
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            arr2[j][k] = 0; //die of overcrowding
            break;
          default:
            arr2[j][k] = 0; //
        }
      }
    }
  }

  for (var j = 0; j < 400; j++) {
    //iterate through rows
    for (var k = 0; k < 400; k++) {
      //iterate through columns
      arr[j][k] = arr2[j][k];
    }
  }
}
