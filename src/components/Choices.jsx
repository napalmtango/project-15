export default function Choices() {
  return (
    <p>
      <input id="nerd" type="checkbox"></input>
      <label htmlFor="nerd" className="check-marg">
        Coder
      </label>
      <input id="knock" type="checkbox"></input>
      <label htmlFor="knock" className="check-marg">
        Knock-knock
      </label>
      <input id="general" type="checkbox"></input>
      <label htmlFor="general" className="check-marg">
        General
      </label>
    </p>
  );
}
