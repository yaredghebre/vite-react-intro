// import { Fragment } from "react";

function ListGroup() {
  let items = ["Roma", "Milano", "Venezia", "Napoli"];
  items = [];

  // Using a conditional rendering, in JSX recall the function with {}
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No cities found</p> : null;
  //   };

  // Implementation using && instead of ternary:
  //    - if condition is true, the element after the && will be rendered
  //    - if condition is false, the whole expression won't be rendered

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
