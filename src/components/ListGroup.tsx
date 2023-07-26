// import { Fragment } from "react";

function ListGroup() {
  const items = ["Roma", "Milano", "Venezia", "Napoli"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
