// import { Fragment } from "react";

function ListGroup() {
  let items = ["Roma", "Milano", "Venezia", "Napoli"];
  items = [];

  // Using a conditional rendering, in JSX recall the function with {}
  const getMessage = () => {
    return items.length === 0 ? <p>No cities found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
