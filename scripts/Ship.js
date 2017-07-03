class Ship {

  constructor(x,y){

    this.x = x;
    this.y = y;

  }
}

var mMat = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

var fleet = [5,4,4,3,2];

createShips();

function createShips(){
  let row,col;

  for (let f = 0; f < fleet.length; f++){
    let dir = Math.round(Math.random());
    let fits = 1;

    if (dir == 1){
      row = randomIntegerMapped(0, mMat.length - fleet[f]);
      col = randomIntegerMapped(0, mMat.length);

      for (let h = 0; h < fleet[f]; h++){
        if(mMat[row + h][col] != 0){
          f--;
          fits = 0;
          break;
        }
      }
      if(fits){
        for (let h = 0; h < fleet[f]; h++){
          mMat[row + h][col] = f + 1;
        }
      }
    }
    else  {
      row = randomIntegerMapped(0, mMat.length);
      col = randomIntegerMapped(0, mMat.length - fleet[f]);

      for (let v = 0; v < fleet[f]; v++){
        if(mMat[row][col + v] != 0){
          f--;
          fits = 0;
          break;
        }
      }
      if(fits){
        for (let v = 0; v < fleet[f]; v++){
          mMat[row][col + v] = f + 1;
        }
      }
    }
  }

  console.table(mMat);

}

function randomIntegerMapped(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
