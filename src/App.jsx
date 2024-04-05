import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let myArray = [];
    for (let i = 1; i <= 10; i++) {
      myArray.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      });
    }
    return myArray;
  }
  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice() {}

  const diceElements = dice.map((die) => (
    <Die value={die.value} key={die.id} isHeld={die.isHeld} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
