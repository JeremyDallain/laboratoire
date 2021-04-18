const buttons = document.querySelectorAll("#pfc button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      const player = buttons[i].innerHTML;
      const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
      let result = "";
              
      if (player === robot) {
          result = "Egalité !"
      } else if ((player === "Pierre" && robot === "Ciseaux") 
      || (player === "Ciseaux" && robot === "Feuille") 
      || (player === "Feuille" && robot === "Pierre")
      || (player === "Pierre" && robot === "Lézard")
      || (player === "Lézard" && robot === "Spock")
      || (player === "Spock" && robot === "Ciseaux")
      || (player === "Ciseaux" && robot === "Lézard")
      || (player === "Lézard" && robot === "Feuille")
      || (player === "Feuille" && robot === "Spock")
      || (player === "Spock" && robot === "Pierre")) {
        result = "Vous avez gagné !";
      } else {
        result = "Vous avez perdu !";
      }	
        
      document.querySelector(".result").innerHTML = `
          Joueur : ${player}<br>
          Robot : ${robot}<br><br>
          <strong>${result}</strong>
      `;
    });
  }