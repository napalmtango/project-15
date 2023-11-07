import JokesField from "./JokesField.jsx";
import Trigger from "./Trigger";
import Footer from "./Footer";

export default function Display() {
  return (
    <>
      <Trigger />
      <p>
        <div className="joke-display">
          <JokesField />
        </div>
        <Footer />
      </p>
    </>
  );
}
