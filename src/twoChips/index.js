const getChips = (chipsScores, K) => {
  for (let i = 0; i < chipsScores.length; i = i + 1) {
    for (let j = i + 1; j < chipsScores.length; j = j + 1) {
      const sum = chipsScores[i] + chipsScores[j];

      if (sum === K) {
        return [chipsScores[i], chipsScores[j]];
      }
    }
  }
};

module.exports = getChips;
