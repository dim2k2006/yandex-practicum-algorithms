const sum = (data) => data.reduce((accumulator, number) => accumulator + number, 0);

const countMovingAverage = (timeseries, K) => {
  const result = [];

  let current_sum = sum(timeseries.slice(0, K));

  result.push(current_sum / K);

  for (let i = 0; i < timeseries.length - K; i = i + 1) {
    current_sum -= timeseries[i];
    current_sum += timeseries[i + K];

    const current_avg = current_sum / K;

    result.push(current_avg);
  }

  return result;
};

module.exports = countMovingAverage;
