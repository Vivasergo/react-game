import React, { createRef, useEffect, useRef, useState } from 'react';
import classNames from "classnames"
import { checkGameResults } from './Common/Logic/checkGameResults';


const App = () => {

  type gameResultType = {
    player: string
    winFieldsArr: Array<number>
  }

  let [currentPlayer, setCurrentPlayer] = useState("X")
  let [gameCells, setGameCells] = useState(['', '', '', '', '', '', '', '', ''])
  let [gameResult, setGameResult] = useState<gameResultType>({ player: "", winFieldsArr: [] })
  let [autoplay, setAutoplay] = useState(false)

  useEffect(() => {
    let gameRes = checkGameResults(gameCells)
    setGameResult(gameRes)

  }, [gameCells])

  // useEffect(() => {


  // }, [autoplay])

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
    setAutoplay(false)
  }


 const changePlayer = (): void => {
      currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
    }
  


  const startAutoplay = () => {
    setAutoplay(true)
    let tArr = [3, 5, 4]


   // if (autoplay) {

    const rotator = (tArr: Array<number>) => {

      let iterator = (index: number, pl:string=currentPlayer) => {



        if (index >= tArr.length) {
          return;
        }

        setGameCells((prevGameCells) =>
          prevGameCells.map((val, ind) => (ind === tArr[index] ? val = pl : val)))
        changePlayer()
        setTimeout(function () {
         

          iterator(++index);
        }, 1000);
      };

      iterator(0, currentPlayer);
    };

    rotator(tArr)
    //         setTimeout(() => {


    // }, 1000);

    // }
  }

  const autoplayBtnCl = classNames("btn", "btn-outline-danger", "ms-3", {
    "active": autoplay
  })

  const isWinField = (winFieldsArr: Array<number>, cellId: number): boolean => {
    if (winFieldsArr.some((val) => val === cellId) && winFieldsArr.length === 3) {
      return true
    }
    else return false
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
              <div onClick={handleClick} id={"0"} className={isWinField(gameResult.winFieldsArr, 0) ? "col game-cell win-field-cell" : "col game-cell notWin"}>{gameCells[0]}</div>
              <div onClick={handleClick} id={"1"} className={isWinField(gameResult.winFieldsArr, 1) ? "col game-cell border border-3 border-dark border-bottom-0 border-top-0 win-field-cell" : "col game-cell border border-3 border-dark border-bottom-0 border-top-0 notWin"}>{gameCells[1]}</div>
              <div onClick={handleClick} id={"2"} className={isWinField(gameResult.winFieldsArr, 2) ? "col game-cell win-field-cell" : "col game-cell notWin"}>{gameCells[2]}</div>
            </div>
            <div className="row border border-3 border-dark border-start-0 border-end-0">
              <div onClick={handleClick} id={"3"} className={isWinField(gameResult.winFieldsArr, 3) ? "col game-cell win-field-cell" : "col game-cell notWin"} >{gameCells[3]}</div>
              <div onClick={handleClick} id={"4"} className={isWinField(gameResult.winFieldsArr, 4) ? "col game-cell border border-3 border-dark border-bottom-0 border-top-0 win-field-cell" : "col game-cell border border-3 border-dark border-bottom-0 border-top-0 notWin"}>{gameCells[4]}</div>
              <div onClick={handleClick} id={"5"} className={isWinField(gameResult.winFieldsArr, 5) ? "col game-cell win-field-cell" : "col game-cell notWin"} >{gameCells[5]}</div>
            </div>
            <div className="row">
              <div onClick={handleClick} id={"6"} className={isWinField(gameResult.winFieldsArr, 6) ? "col game-cell win-field-cell" : "col game-cell notWin"} >{gameCells[6]}</div>
              <div onClick={handleClick} id={"7"} className={isWinField(gameResult.winFieldsArr, 7) ? "col game-cell border border-3 border-dark border-bottom-0 border-top-0 win-field-cell" : "col game-cell border border-3 border-dark border-bottom-0 border-top-0 notWin"}>{gameCells[7]}</div>
              <div onClick={handleClick} id={"8"} className={isWinField(gameResult.winFieldsArr, 8) ? "col game-cell win-field-cell" : "col game-cell notWin"} >{gameCells[8]}</div>
            </div>
          </div>

          <div className="col-1"></div>
        </div>
        <div className="row my-3">
          <div className="col">
            <button onClick={startNewGame} type="button" className="btn btn-primary">New game</button>
            <button onClick={startAutoplay} type="button" className={autoplayBtnCl}>Auto play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
