import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    // let newCount = count + 1;
    let newCount = e.target.value;
    setCount(newCount);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    const newText = data.slice(0, amount);
    setText(newText);
    console.log(newText);
  };

  return (
    <section className="section-center">
      <h2> Lorem Ipsum</h2>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="count"> paragraphs: </label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={handleChange}
          min="1"
          max="8"
          step="1"
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <div className="lorem-text">
        {text.map((paragraph) => {
          const id = nanoid(3);
          console.log(id);
          return <p key={id}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
