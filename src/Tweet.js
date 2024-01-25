import React from "react";
import { Card } from "react-bootstrap";

const Tweet = (props) => {
  // const [counter, setCounter] = useState(0)

  const text = props.text;

  const author = props.author;
  const date = props.date;
  /*
  const increment = () => {
    setCounter(counter+1)
  }

  const decrease = () => {
    setCounter(counter-1)
  }
*/
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>

      {/*<h1>counter: {counter}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increment}>+</button>
      */}
    </div>
  );
};

export default Tweet;
