import Header from "./components/Header";
import Main from "./components/Main";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="center">
        <div className="container">
          <Main />
          <Display />
        </div>
      </div>
    </>
  );
}

// export default App;
