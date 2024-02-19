import Part from "./Part";
const Content = (props) => {
  console.log(props.parts[0].exercises);

  const renderParts = props.parts.map((part) => {
    return part.name + " " + part.exercises;
  });
  console.log(renderParts[0]);

  return (
    <>
      <Part part={renderParts[0]} />
      <Part part={renderParts[1]} />
      <Part part={renderParts[2]} />
    </>
  );
};

export default Content;
