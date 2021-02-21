import React, { useState } from 'react';


const App = () => {

  let [currentPlayer, setCurrentPlayer] = useState("X")
  let [gameCells, setGameCells] = useState(['', '', '', '', '', '', '', '', ''])

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cellId = +event.currentTarget.id

    if (gameCells[cellId] === '') {
      setGameCells((prevGameCells) => prevGameCells.map((val, index) => (index === cellId ? val = currentPlayer : val)))
      currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
    }
  }

  return (
    <div className="container text-center">
      <h3>React game: X-0</h3>
      <h4>Current turn: Player "{currentPlayer}"</h4>
      <div className="row">
        <div onClick={handleClick} id={"0"} className="col game-cell">{gameCells[0]}</div>
        <div onClick={handleClick} id={"1"} className="col game-cell border border-3 border-dark border-bottom-0 border-top-0">{gameCells[1]}</div>
        <div onClick={handleClick} id={"2"} className="col game-cell">{gameCells[2]}</div>
      </div>
      <div className="row border border-3 border-dark border-start-0 border-end-0">
        <div onClick={handleClick} id={"3"} className="col game-cell">{gameCells[3]}</div>
        <div onClick={handleClick} id={"4"} className="col game-cell border border-3 border-dark border-bottom-0 border-top-0">{gameCells[4]}</div>
        <div onClick={handleClick} id={"5"} className="col game-cell">{gameCells[5]}</div>
      </div>
      <div className="row">
        <div onClick={handleClick} id={"6"} className="col game-cell">{gameCells[6]}</div>
        <div onClick={handleClick} id={"7"} className="col game-cell border border-3 border-dark border-bottom-0 border-top-0">{gameCells[7]}</div>
        <div onClick={handleClick} id={"8"} className="col game-cell">{gameCells[8]}</div>
      </div>
    </div>
  );
}

export default App;
