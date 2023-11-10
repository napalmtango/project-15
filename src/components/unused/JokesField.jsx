let type = "Coder";
let setup = "What's the best thing about a Boolean?";
// let setup =
//   "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?";
let punch = "Even if you're wrong, you're only off by a bit.";
export default function JokesField() {
  return (
    <>
      <div className="joke-type">Type = {type}</div>
      <div className="joke-setup">{setup}</div>
      <div className="joke-punch">{punch}</div>
    </>
  );
}
