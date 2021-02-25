import React, { useEffect, useState } from 'react';
import { checkGameResults } from './Common/Logic/checkGameResults';
import { isWinField, shuffleArray } from './Common/Utils/utils';
import { ButtonsBlock } from './Components/Buttons/ButtonsBlock';
import { Footer } from './Components/Footer/Footer';
import { GameResultBlock } from './Components/GameResultBlock/GameResultBlock';


const App = () => {

  type gameResultType = {
    player: string
    winFieldsArr: Array<number>
  }

  let [currentPlayer, setCurrentPlayer] = useState("X")
  let [gameCells, setGameCells] = useState(['', '', '', '', '', '', '', '', ''])
  let [gameResult, setGameResult] = useState<gameResultType>({ player: "", winFieldsArr: [] })
  let [autoplay, setAutoplay] = useState(false)
  let [autoplayIndex, setAutoplayIndex] = useState(0)
  let [autoplayRandCells, setAutoplayRandCells] = useState<Array<number>>([])

  useEffect(() => {
    let gameRes = checkGameResults(gameCells)
    setGameResult(gameRes)

  }, [gameCells])

  useEffect(() => {

    if (autoplay && (autoplayRandCells.length - 1) >= autoplayIndex && gameResult.player === "") {
      setGameCells((prevGameCells) => prevGameCells.map((val, ind) => (ind === autoplayRandCells[autoplayIndex] ? val = currentPlayer : val)))
      changePlayer()

      setTimeout(() => {
        setAutoplayIndex(++autoplayIndex)
      }, 1000);
    }
    else {
      setAutoplay(false)
    }
  }, [autoplay, autoplayIndex])

  const changePlayer = (): void => {
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const cellId = +event.currentTarget.id
    if (gameResult.player === "") {
      if (gameCells[cellId] === '') {
        setGameCells((prevGameCells) => prevGameCells.map((val, index) => (index === cellId ? val = currentPlayer : val)))
        changePlayer()
      }
    }
  }

  const startNewGame = (): void => {
    setCurrentPlayer("X")
    setGameResult({ player: "", winFieldsArr: [] })
    setGameCells(['', '', '', '', '', '', '', '', ''])
    setAutoplay(false)
    setAutoplayIndex(0)
    setAutoplayRandCells([])
  }

  const startAutoplay = () => {
    startNewGame()
    setAutoplay(true)
    setAutoplayRandCells(shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8]))
  }


  return (
    <div className="main-block text-center pt-2 m-0">
      <header className="mb-4">
        <h3 className="game-title">React game: Tic Tac Toe</h3>
      </header>

      <div className="container game-field">
        <GameResultBlock winner={gameResult.player} currentPlayer={currentPlayer} />
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
        <ButtonsBlock startNewGame={startNewGame} startAutoplay={startAutoplay} isAutoplay={autoplay} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
