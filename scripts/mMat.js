let mMat = [
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
  maxV = 3;
  maxH = 3;

  createShips();

  function createShips(){
    let row,col;
    let dir = Math.floor(Math.random()* (2-1+1))+1;
    console.log("Direction " + dir);

    for (let f = 0; f < fleet.length; f++){

    if (dir == 1){
      row = Math.floor(Math.random() * mMat.length);
      col = Math.floor(Math.random() * (mMat.length - fleet[f] + 1));

      for (let h = 0; h < fleet[f]; h++){
      mMat[row][h] = fleet[f];
      }
    }
    else  {
     col = Math.floor(Math.random() * (mMat.length - fleet[f] + 1));
     row = Math.floor(Math.random() * mMat.length);

     for (let v = 0; v < fleet[f]; v++){
      mMat[v][col] = fleet[f];
      }
    }
    console.log("row " + row);
    console.log("col " + col);
  }
  for (let i = 0; i < mMat.length; i++){
    console.log(mMat[i]);
  }

  function collision(){

  }
}
