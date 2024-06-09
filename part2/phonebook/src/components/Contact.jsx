export default function Contact(props) {
  return (
    <p key={props.name}>
      <b>{props.name}</b> {props.number}
    </p>
  );
}
