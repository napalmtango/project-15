import React from "react";
import Choices from "./Choices";

const copy0 = 'Welcome to "Do you Feel Lucky?."';

const copy1 =
  "Press the button, and we'll serve up a random joke that only a coder could love ;)";

const copy2 = "You can also choose from knock-knock and general jokes.";

export default function Main(props) {
  return (
    <>
      <p className="first-p">{copy0}</p>
      <p>{copy1}</p>
      <p className="first-p">{copy2}</p>
      <Choices />
    </>
  );
}
