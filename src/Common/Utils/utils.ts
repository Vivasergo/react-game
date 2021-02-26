export const shuffleArray = (array: Array<number>): Array<number> => {
  return array.sort(() => Math.random() - 0.5);
};

export const isWinField = (
  winFieldsArr: Array<number>,
  cellId: number
): boolean => {
  if (winFieldsArr.some((val) => val === cellId) && winFieldsArr.length === 3) {
    return true;
  } else return false;
};
