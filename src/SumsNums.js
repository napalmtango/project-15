import "./index.css";
import { useState } from "react";

export default function App() {
  // useState declarations
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(-16);
  const [num3, setNum3] = useState(78);
  const [sum4, setSum4] = useState(0);

  return (
    <div className="App">
      <h1>
        Sums <span className="h1-small">and</span> Nums
      </h1>

      {/* num1 ---------------*/}
      {num1 ? (
        <div className="checkbox">
          <span
            className="btn"
            onClick={() => {
              setNum1(false);
            }}
          ></span>
          &#x2611;<span className="size16">{num1}</span>
        </div>
      ) : (
        <div className="checkbox">
          <span
            className="btn"
            onClick={() => {
              setNum1(5);
            }}
          ></span>
          &#x2610;<span className="size16">{num1}</span>
        </div>
      )}

      {/* num2 ---------------*/}
      {num2 ? (
        <div className="checkbox">
          <span
            className="btn"
            onClick={() => {
              setNum2(false);
            }}
          ></span>
          &#x2611;<span className="size16">{num2}</span>
        </div>
      ) : (
        <div className="checkbox">
          <span
            className="btn"
            onClick={() => {
              setNum2(-16);
            }}
          ></span>
          &#x2610;<span className="size16">{num2}</span>
        </div>
      )}

      {/* num3 ---------------*/}
      {num3 ? (
        <div className="checkbox">
          <span
            className="btn"
            onClick={() => {
              setNum3(false);
            }}
          ></span>
          &#x2611;<span className="size16">{num3}</span>
        </div>
      ) : (
        <div className="checkbox">
          <span
            className="btn"
            onClick={() => {
              setNum3(78);
            }}
          ></span>
          &#x2610;<span className="size16">{num3}</span>
        </div>
      )}

      {/* sum4 ---------------*/}

      <div>
        <div className="size16 sum4">{sum4}</div>
        <button
          onClick={() => {
            console.log(num1, num2, num3);
            console.log(num1 + num2 + num3);
            setSum4(num1 + num2 + num3);
          }}
        >
          Sum all Checked Nums
        </button>
      </div>

      {/* // do not copy to local */}
    </div>
  );

  function Mutate() {
    {
      let numrand;
      let numcheck;
      numrand = Math.floor(Math.random() * 200 - 100);
      numcheck = Math.floor(Math.random() * 3);
      return (
        <div className="App">
          <div>{numrand}</div>
          <div>{numcheck}</div>
        </div>
      );
    }
  }
}
