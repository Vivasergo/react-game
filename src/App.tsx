import React, { useEffect, useMemo, useRef, useState } from 'react';
import { checkGameResults } from './components/Logic/checkGameResults';


const App = () => {

  type gameResultType = {
    player: string
    winFieldsArr: Array<number>
  }

  let [currentPlayer, setCurrentPlayer] = useState("X")
  let [gameCells, setGameCells] = useState(['', '', '', '', '', '', '', '', ''])
  let [gameResult, setGameResult] = useState<gameResultType>({ player: "", winFieldsArr: [] })

  useEffect(() => {
    let gameRes = checkGameResults(gameCells)
    setGameResult(gameRes)

  }, [gameCells])


  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const cellId = +event.currentTarget.id
    if (gameResult.player === "") {
      if (gameCells[cellId] === '') {
        setGameCells((prevGameCells) => prevGameCells.map((val, index) => (index === cellId ? val = currentPlayer : val)))
        currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
      }
    }
  }

  const startNewGame = (): void => {
    setCurrentPlayer("X")
    setGameResult({ player: "", winFieldsArr: [] })
    setGameCells(['', '', '', '', '', '', '', '', ''])
  }

  const startAutoPlay = () => {

  }

  return (
    <div className="main-block text-center px-3 pt-2">
      <header className="mb-4">
        <h3 className="game-title">React game: Tic Tac Toe</h3>
      </header>

      <div className="container game-field">
        <div className="row my-3">
          {gameResult.player === "" && <h4>Current turn: Player "{currentPlayer}"</h4>}
          {(gameResult.player !== "" && gameResult.player !== "Tie") && <h4 className="winner-title fw-bold">The winner is: Player {gameResult.player}</h4>}
          {gameResult.player === "Tie" && <h4 className="tie-title fw-bold">Tie this time !</h4>}
        </div>
        <div className="row">
          <div className="col-1"></div>

          <div className="col">
            <div className="row">
              <div onClick={handleClick} id={"0"} className={gameResult.winFieldsArr.some((val) => val === 0) && gameResult.winFieldsArr.length === 3 ? "col game-cell win-field-cell" : "col game-cell"}>{gameCells[0]}</div>
              <div onClick={handleClick} id={"1"} className={gameResult.winFieldsArr.some((val) => val === 1) && gameResult.winFieldsArr.length === 3 ? "col game-cell border border-3 border-dark border-bottom-0 border-top-0 win-field-cell" : "col game-cell border border-3 border-dark border-bottom-0 border-top-0"}>{gameCells[1]}</div>
              <div onClick={handleClick} id={"2"} className={gameResult.winFieldsArr.some((val) => val === 2) && gameResult.winFieldsArr.length === 3 ? "col game-cell win-field-cell" : "col game-cell"}>{gameCells[2]}</div>
            </div>
            <div className="row border border-3 border-dark border-start-0 border-end-0">
              <div onClick={handleClick} id={"3"} className={gameResult.winFieldsArr.some((val) => val === 3) && gameResult.winFieldsArr.length === 3 ? "col game-cell win-field-cell" : "col game-cell"} >{gameCells[3]}</div>
              <div onClick={handleClick} id={"4"} className={gameResult.winFieldsArr.some((val) => val === 4) && gameResult.winFieldsArr.length === 3 ? "col game-cell border border-3 border-dark border-bottom-0 border-top-0 win-field-cell" : "col game-cell border border-3 border-dark border-bottom-0 border-top-0"}>{gameCells[4]}</div>
              <div onClick={handleClick} id={"5"} className={gameResult.winFieldsArr.some((val) => val === 5) && gameResult.winFieldsArr.length === 3 ? "col game-cell win-field-cell" : "col game-cell"} >{gameCells[5]}</div>
            </div>
            <div className="row">
              <div onClick={handleClick} id={"6"} className={gameResult.winFieldsArr.some((val) => val === 6) && gameResult.winFieldsArr.length === 3 ? "col game-cell win-field-cell" : "col game-cell"} >{gameCells[6]}</div>
              <div onClick={handleClick} id={"7"} className={gameResult.winFieldsArr.some((val) => val === 7) && gameResult.winFieldsArr.length === 3 ? "col game-cell border border-3 border-dark border-bottom-0 border-top-0 win-field-cell" : "col game-cell border border-3 border-dark border-bottom-0 border-top-0"}>{gameCells[7]}</div>
              <div onClick={handleClick} id={"8"} className={gameResult.winFieldsArr.some((val) => val === 8) && gameResult.winFieldsArr.length === 3 ? "col game-cell win-field-cell" : "col game-cell"} >{gameCells[8]}</div>
            </div>
          </div>

          <div className="col-1"></div>
        </div>
        <div className="row my-3">
          <div className="col">
            <button onClick={startNewGame} type="button" className="btn btn-primary">New game</button>
            <button onClick={startAutoPlay} type="button" className="btn btn-primary">Auto play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
