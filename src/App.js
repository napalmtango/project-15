import Header from "./components/Header";
import Main from "./components/Main";
import Choices from "./components/Choices";
import Trigger from "./components/Trigger";
import Display from "./components/Display";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="center">
        <div className="container">
          <Main />
          <Choices />
          <Trigger />
          <Display />
          <Footer />
        </div>
      </div>
    </>
  );
}

// export default App;
