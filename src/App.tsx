import React, { useEffect, useState } from 'react';
import { checkGameResults } from './components/Logic/isFinished';


const App = () => {

  type gameResultType = {
    player: string
    winFieldsArr: Array<number>
  }

  let [currentPlayer, setCurrentPlayer] = useState("X")
  let [gameCells, setGameCells] = useState(['', '', '', '', '', '', '', '', ''])
  let [gameResult, setGameResult] = useState<gameResultType>({ player: "", winFieldsArr: [] })
  // let [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    let gameRes = checkGameResults(gameCells)
    setGameResult(gameRes)

    // if (winner!=="") { setWinner(winner) }

    // return () => {
    //   cleanup
    // }
  }, [gameCells])

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cellId = +event.currentTarget.id
    if (gameResult.player === "") {
      if (gameCells[cellId] === '') {
        setGameCells((prevGameCells) => prevGameCells.map((val, index) => (index === cellId ? val = currentPlayer : val)))
        currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
      }
    }
  }

  return (
    <div className="main-block text-center px-3 pt-2">
      <header className="mb-4">
       
          <h3 className="game-title">React game: Tic Tac Toe</h3>
          {gameResult.player === "" && <h4>Current turn: Player "{currentPlayer}"</h4>}
          {(gameResult.player !== "" && gameResult.player !== "Tie") && <h4 className="winner-title fw-bold">The winner is: Player {gameResult.player}</h4>}
        {gameResult.player === "Tie" && <h4 className="tie-title fw-bold">Tie this time !</h4>}
      
      </header>

      <div className="container game-field">



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

    </div>
  );
}

export default App;
