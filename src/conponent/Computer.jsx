import React from "react";
import { useState } from "react";

function Computer({ compSc, setComp, userSc, setUser, winner, setWinner }) {
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <div>
      <p style={{ padding: "8px  10px ", border: "2px solid grey" }}>
        Computer:{compSc}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUser(e.target.children[0].value);
          let rand = randomNumberInRange(1, 3);
          console.log(rand)
          if (rand == 1) setComp("Rock");
          else if (rand == 2) setComp("Paper");
          else setComp("Scissors");
          //=====================================================
          if (compSc == "Rock" && userSc == "Rock") setWinner("Draft");
          else if (compSc == "Rock" && userSc == "Paper") setWinner("User");
          else if (compSc == "Rock" && userSc == "Scissors")setWinner("Computer");
          else if (compSc == "Paper" && userSc == "Rock") setWinner("Computer");
          else if (compSc == "Paper" && userSc == "Paper") setWinner("Draft");
          else if (compSc == "Paper" && userSc == "Scissors") setWinner("User");
          else if (compSc == "Scissors" && userSc == "Rock") setWinner("User");
          else if (compSc == "Scissors" && userSc == "Paper") setWinner("Computer");
          else if(compSc=="Scissors" && userSc=="Scissors") setWinner("Draft")
        }}
      >
        <select style={{ width: "350px", height: "40px" }} name="" id="">
          <option value="Rock">Rock</option>
          <option value="Paper">Paper</option>
          <option value="Scissors">Scissors</option>
        </select>
        <button
          style={{
            height: "40px",
            margin: "5px 5px",
            backgroundColor: "red",
            color: "white",
          }}
          type="submit"
        >
          Run!
        </button>
      </form>

      <h2>Winner : {winner} </h2>
    </div>
  );
}

export default Computer;
