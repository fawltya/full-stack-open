export default function Contact(props) {
  return (
    <p key={props.name}>
      {props.name} {props.number}
    </p>
  );
}
