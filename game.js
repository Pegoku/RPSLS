// 1 Rock     Scissors Lizard
// 2 Paper    Spock Rock
// 3 Scissors Lizard Paper
// 4 Lizard   Spock Paper
// 5 Spock    Scissors Rock
function ini() {
    document.writeln(
      '<div class="buttons" style="margin: auto; width: 50%; padding: 10px;"><button onclick="rock()"><img src="https://statics.memondo.com/p/s1/crs/2023/12/CR_1300692_dedd199497d34d7fb273663f5744e7d6_the_rock.jpg?cb=5885355" alt="" style="display: block; margin-left: margin-right: auto; max-width:150px; max-height:150px;"></button><button onclick="paper()"><img src="https://kleaning.es/935-large_default/8-packs-de-12-rollos-papel-de-vater.jpg" alt="" style="display: block; margin-left: margin-right: auto; max-width:150px; max-height:150px;"></button><button onclick="scissors()"><img src="https://www.partyfiesta.com/16906-large_default/tijeras-trolls.jpg" alt="" style="display: block; margin-left: margin-right: auto; max-width:150px; max-height:150px;"></button><button onclick="lizard()"><img src="https://www.google.com/url?q=https://encrypted-tbn0.gstatic.com/images?q%3Dtbn:ANd9GcTMcdHxb8JKIDNHhnd8cliLYywIXuv2gc42XJWzbkncLZHaR05NFDQV9Wm3cnzEN5EeAk8%26usqp%3DCAU&source=gmail&ust=1715754914871000&usg=AOvVaw1shtBt6_5u4RrPNEi4G-EY" alt="" style="display: block; margin-left: margin-right: auto; max-width:150px; max-height:150px;"></button><button onclick="spock()"><img src="https://www.lanacion.com.ar/resizer/v2/su-personaje-en-star-trek-lo-llevo-a-lo-mas-alto-TVCU6GCJZZCJ5KY7DB7EVZBY7Y.jpg?auth=6ce3566c686a4af60155f8f69787b79f59744982e174b972f355deedb477148d&width=420&height=280&quality=70&smart=true" alt="" style="display: block; margin-left: margin-right: auto; max-width:150px; max-height:150px;"></button></div>'
    );
    document.body.style.backgroundColor = "#99ff99";
  }
  ini();
  document.body.style.backgroundColor = "#99ff99";
  var fstTime = true;
  var name = prompt("What is your name?");
  
  var Win = false;
  var Lose = false;
  var Draw = false;
  
  var playerLives = 3;
  var botLives = 3;
  
  var choice = 0;
  
  var game = document.getElementById("game");
  function rock() {
    console.log("hi :)");
    play(1);
  }
  function paper() {
    console.log("hi :)");
    play(2);
  }
  function scissors() {
    console.log("hi :)");
    play(3);
  }
  function lizard() {
    console.log("hi :)");
    play(4);
  }
  function spock() {
    console.log("hi :)");
    play(5);
  }
  function play(choice) {
    if (playerLives >= 1 && botLives >= 1) {
      var Win = false;
      var Lose = false;
      var Draw = false;
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
  
      function getNumFromPick(item) {
        if (item == "Rock") {
          return 1;
        } else if (item == "Paper") {
          return 2;
        } else if (item == "Scissors") {
          return 3;
        } else if (item == "Lizard") {
          return 4;
        } else if (item == "Spock") {
          return 5;
        } else {
          return "e";
        }
      }
  
      function getPickFromNum(item) {
        if (item == 1) {
          return "Rock";
        } else if (item == 2) {
          return "Paper";
        } else if (item == 3) {
          return "Scissors";
        } else if (item == 4) {
          return "Lizard";
        } else if (item == 5) {
          return "Spock";
        } else {
          return "e";
        }
      }
  
      function battle(player, bot) {
        if (player == 1) {
          if (bot == 1) {
            Draw = true;
          } else if (bot == 2) {
            Lose = true;
          } else if (bot == 3) {
            Win = true;
          } else if (bot == 4) {
            Win = true;
          } else if (bot == 5) {
            Lose = true;
          }
        } else if (player == 2) {
          if (bot == 1) {
            Win = true;
          } else if (bot == 2) {
            Draw = true;
          } else if (bot == 3) {
            Lose = true;
          } else if (bot == 4) {
            Lose = true;
          } else if (bot == 5) {
            Win = true;
          }
        } else if (player == 3) {
          if (bot == 1) {
            Lose = true;
          } else if (bot == 2) {
            Win = true;
          } else if (bot == 3) {
            Draw = true;
          } else if (bot == 4) {
            Win = true;
          } else if (bot == 5) {
            Lose = true;
          }
        } else if (player == 4) {
          if (bot == 1) {
            Lose = true;
          } else if (bot == 2) {
            Win = true;
          } else if (bot == 3) {
            Lose = true;
          } else if (bot == 4) {
            Draw = true;
          } else if (bot == 5) {
            Win = true;
          }
        } else if (player == 5) {
          if (bot == 1) {
            Win = true;
          } else if (bot == 2) {
            Lose = true;
          } else if (bot == 3) {
            Win = true;
          } else if (bot == 4) {
            Lose = true;
          } else if (bot == 5) {
            Draw = true;
          }
        }
      }
  
      const botChoice = getRandomInt(1, 6);
      if (fstTime) {
        fstTime = false;
        ini();
      }
      document.writeln(
        name + ": " + getPickFromNum(choice) + "<br>Bot: " + getPickFromNum(botChoice) + "<br>"
      );
  
      battle(choice, botChoice);
  
      if (Win) {
        document.writeln("You won<br>");
        botLives = botLives - 1;
      }
  
      if (Lose) {
        document.writeln("You lost<br>");
        playerLives = playerLives - 1;
      }
  
      if (Draw) {
        document.writeln("It's a draw<br>");
      }
  
      document.writeln(playerLives + " - " + botLives + "<br>");
    }
    if (playerLives <= 0) {
      document.writeln('Winner: Computer<br><button onClick="window.location.reload();">Play again</button>');
      document.body.style.backgroundImage = "url('https://cadenaser.com/resizer/LOg8G6ZOUs27cnp7d5XWPwN0aWc=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/VUXJ4NGPPJIGVPKH37DJM5MCOI.jpg')";
    } else if (botLives <= 0) {
      document.writeln("Winner: " + name + '<br><button onClick="window.location.reload();">Play again</button>');
    }
  }