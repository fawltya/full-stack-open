const Total = ({ parts }) => {
  // let total = 0;
  // props.parts.forEach((part) => {
  //   total += part.exercises;
  // });
  const total = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0);

  return <p>Number of exercises {total}</p>;
};

export default Total;
