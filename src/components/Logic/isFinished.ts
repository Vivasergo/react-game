export const checkGameResults = (
  gameCells: Array<string>
): { player: string; winFieldsArr: Array<number> } => {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (player: string): Array<number> => {
    let winArr: Array<number> = [];

    winCombinations.forEach((element) => {
      if (element.every((key) => gameCells[key] === player)) {
        return (winArr = element);
      }
    });

    return winArr;
  };

  if (checkWinner("X").length > 0) {
    return { player: "X", winFieldsArr: checkWinner("X") };
  } else if (checkWinner("O").length > 0) {
    return { player: "O", winFieldsArr: checkWinner("O") };
  } else if (gameCells.every((val) => val !== "")) {
    return { player: "Tie", winFieldsArr: [] };
  } else return { player: "", winFieldsArr: [] };
};
