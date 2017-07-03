const MAX_ROWS = 10;
const MAX_COLS = 10;
const MAX_SHIPS = 5;
var shipCount = 5;
var iScore = 0;
var iShot = 50;
let img = 0;

class App {

  constructor(){
  //  console.log(mMat);
    this.ship = new Ship();

  //Initilize screen
    this.initScreen();

  //setup handlers
    this.setupHandlers();

    this.gameSounds();
}
  initScreen()  {
      //creates table using 2 for loops
      let gameAreaMarkup = '<table id="game-map">';

      for (let r  = 0; r < MAX_ROWS; r++)  {

          gameAreaMarkup += '<tr>';

          for (let c = 0; c < MAX_COLS; c++)  {

          gameAreaMarkup += `<td class="cell" data-row="${r}"
          data-col="${c}"></td>`;
          }
          gameAreaMarkup += '<tr>';
      }
      gameAreaMarkup += "</table>";

      document.querySelector("#game-area").innerHTML = gameAreaMarkup;

      document.querySelector(".shotNum").innerHTML = iShot;
      document.querySelector("#scoreNum").innerHTML = iScore;
  }

  setupHandlers() {
    //creates a click event that when you click the start button on the front page
    //it hides the menu and displays the game
    document.querySelector("#startMenu")
        .addEventListener('click', (event ) =>  {
          document.querySelector("#startMenu").className="hide";
          document.querySelector("#startGame").className="hide";
          //stops any unwanted music from playing
          this.menuMus.play();
          this.ambientSound.play();
          this.BGMus.stop();
        });
        //creates a click event
    document.querySelector("#game-map")
        .addEventListener('click',( event ) =>  {
        //get the target of this event
        let theCellE1 = event.target;
        this.fireLaser.load();
        this.fireLaser.play();

        if (theCellE1.tagName == 'TD' && theCellE1.classList.length == 1){
        //get the data-row and data-col from this cell
            let pos = {
              r: theCellE1.getAttribute('data-row'),
              c: theCellE1.getAttribute('data-col')
            }
            let change;
            //creates a cell ID
            let cell = mMat[pos.r][pos.c];

            //if the cell on the array wasn't a 0, then add the hit-chip class
            //to that cell, increase the score variable by x and play audio
            if(cell != 0){
              change = "hit-ship";
              iScore += 5;
              this.hitShip.load();
              this.hitShip.play();

              fleet[cell - 1]--;
              if(fleet[cell - 1] == 0){
                //Replacing Images code
                if( cell == 1)  {
                img = document.getElementsByClassName("shipImage5");
                img[0].src = "images/BS_5_hits_Destroyed.jpg";
              }
              else if( cell == 2) {
                img = document.getElementsByClassName("shipImage4");
                img[0].src = "images/BS_4_hits_2_Destroyed.jpg";
              }
              else if (cell == 3) {
                img = document.getElementsByClassName("shipImage3");
                img[0].src = "images/BS_4_hits_1_Destroyed.jpg";
              }
              else if (cell == 4) {
                img = document.getElementsByClassName("shipImage2");
                img[0].src = "images/BS_3_hits_Destroyed.jpg";
              }
              else if (cell == 5) {
                img = document.getElementsByClassName("shipImage1");
                img[0].src = "images/BS_2_hits_Destroyed.jpg";
              }
                this.destroyShip.load();
                this.destroyShip.play();
                shipCount--;
                //if the amount of ships left on the board reaches 0, display
                //the div that has the win screen as well as play and stop some
                //audio
                if (shipCount == 0){
                  document.querySelector("#winScreen").className="show";
                  document.querySelector("#winStatement").className="show";
                  this.ambientSound.stop();
                  this.BGMus.stop();
                  this.menuMus.stop();
                  this.winGame.play();
                }
              }
            }
            else
            {
              //add the miss-ship class to the cell, decrease score by x and
              //play the audio
              change = "miss-ship";
              iScore -= 1;
              this.missShip.load();
              this.missShip.play();
            }

          iShot--;
          //changes the values of the shots and score with js value that change
          //in the html everytime an action is performed
          document.querySelector(".shotNum").innerHTML = iShot;
          document.querySelector("#scoreNum").innerHTML = iScore;

          theCellE1.classList.add(change);

        //if the shot counter is equal to 0, show the lose div and play audio
          if (iShot == 0){
            document.querySelector("#loseScreen").className="show";
            document.querySelector("#loseStatement").className="show";
            this.ambientSound.stop();
            this.BGMus.stop();
            this.menuMus.stop();
            this.loseGame.play();
          }
      }
    });
  }
  gameSounds(){
    //using the buzz library create variables to be called throughout the .js
    //file. Including attributes such as loop and volume.

    //Sorry if the mixing levels are poor

    this.ambientSound = new buzz.sound("Audio/AMB_Space Battle_01", {
    formats: [ "wav" ],
    preload: true,
    autoplay: false,
    loop: true,
    volume: 40
  });

    this.hitShip = new buzz.sound("Audio/SFX_Ship Impact_1", {
    formats: [ "wav" ],
    preload: true,
    autoplay: false,
    loop: false,
    volume: 80
  });

    this.missShip = new buzz.sound("Audio/SFX_Miss", {
    formats: [ "wav" ],
    preload: true,
    autoplay: false,
    loop: false,
    volume: 80
  });

    this.BGMus = new buzz.sound("Audio/MUS_Loop_BS", {
    formats: [ "wav" ],
    preload: false,
    autoplay: true,
    loop: true,
    volume: 40
  });

    this.menuMus = new buzz.sound("Audio/MUS_Menu_1_02", {
    formats: [ "wav" ],
    preload: true,
    autoplay: false,
    loop: true,
    volume: 40
  });

    this.fireLaser = new buzz.sound("Audio/SFX_PlayerShot_01", {
    formats: [ "wav" ],
    preload: true,
    autoplay: false,
    loop: false,
    volume: 60
  });

    this.destroyShip = new buzz.sound("Audio/SFX_Ship Destruction_01",  {
      formats: [ "wav" ],
      preload: true,
      autoplay: false,
      loop: false,
      volume: 70
    });

    this.winGame  = new buzz.sound("Audio/MUS_Win", {
      formats: [ "wav" ],
      preload: true,
      autoplay: false,
      loop: true,
      volume: 40
    });

    this.loseGame  = new buzz.sound("Audio/MUS_loseGame", {
      formats: [ "wav" ],
      preload: true,
      autoplay: false,
      loop: true,
      volume: 40
    });

    this.menusClick  = new buzz.sound("Audio/UI_ButtonClick", {
      formats: [ "wav" ],
      preload: true,
      autoplay: false,
      loop: false,
      volume: 60
    });
}
  run() {
      //let the user have control
  }
}

let app = new App();
app.run();
