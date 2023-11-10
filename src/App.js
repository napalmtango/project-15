import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [coder, setCoder] = useState(true);
  const [knock, setKnock] = useState(false);
  const [general, setGeneral] = useState(false);

  let type = "Coder";
  let setup = "What's the best thing about a Boolean?";
  let punch = "Even if you're wrong, you're only off by a bit.";

  return (
    <div className="App">
      <Header />
      <div className="center">
        <Main />
        {/* coder ---------------*/}
        {coder ? (
          <div className="checkbox">
            <span
              className="btn"
              onClick={() => {
                setCoder(false);
              }}
            ></span>
            &#x2611;<span className="size16">Coder</span>
          </div>
        ) : (
          <div className="checkbox">
            <span
              className="btn"
              onClick={() => {
                setCoder(true);
              }}
            ></span>
            &#x2610;<span className="size16">Coder</span>
          </div>
        )}

        {/* knock ---------------*/}
        {knock ? (
          <div className="checkbox">
            <span
              className="btn"
              onClick={() => {
                setKnock(false);
              }}
            ></span>
            &#x2611;<span className="size16">Knock-knock</span>
          </div>
        ) : (
          <div className="checkbox">
            <span
              className="btn"
              onClick={() => {
                setKnock(true);
              }}
            ></span>
            &#x2610;<span className="size16">Knock-knock</span>
          </div>
        )}

        {/* general ---------------*/}
        {general ? (
          <div className="checkbox">
            <span
              className="btn"
              onClick={() => {
                setGeneral(false);
              }}
            ></span>
            &#x2611;<span className="size16">General</span>
          </div>
        ) : (
          <div className="checkbox">
            <span
              className="btn"
              onClick={() => {
                setGeneral(true);
              }}
            ></span>
            &#x2610;<span className="size16">General</span>
          </div>
        )}
        <div>
          <button
            onClick={() => {
              console.log(coder, knock, general);
            }}
          >
            click me <span className="laugh">&#128514;</span>
          </button>
        </div>

        <div className="joke-display">
          <div className="joke-type">Type = {type}</div>
          <div className="joke-setup">{setup}</div>
          <div className="joke-punch">{punch}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
  //end return
}
