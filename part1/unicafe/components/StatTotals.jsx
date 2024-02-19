import StatisticLine from "./StatisticLine";

const StatTotals = ({ good, neutral, bad }) => {
  const totalCount = good + neutral + bad;

  const findAverage = () => {
    return totalCount === 0 ? 0 : (good - bad) / totalCount;
  };

  const findPositive = () => {
    const positiveNum = (100 / totalCount) * good;
    return positiveNum.toFixed(2) + "%";
  };

  return totalCount === 0 ? (
    "No feedback given..."
  ) : (
    <table className="stats-table">
      <tbody>
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Average" value={findAverage().toFixed(2)} />
        <StatisticLine text="Positive" value={findPositive()} />
      </tbody>
    </table>
  );
};

export default StatTotals;
