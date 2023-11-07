export default function Footer(props) {
  return (
    <p className="bold red">
      Free jokes api provided by{" "}
      <a href="https://apipheny.io/free-api" rel="noreferrer" target="_blank">
        https://apipheny.io/free-api
      </a>
    </p>
  );
  // return <p className="bold red"> {props.content}</p>;
}
