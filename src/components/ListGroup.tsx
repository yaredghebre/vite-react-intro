// import { Fragment } from "react";
// import { MouseEvent } from "react"; // to have TypeScript Autocompletion on events

import { useState } from "react";

function ListGroup() {
  let items = ["Roma", "Milano", "Venezia", "Napoli"];
  //   items = [];
  //   let selectdIndex = 0; // if set to -1 means No item selected

  // Hook  - function to tap into built-in features
  const [selectdIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

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
        {items.map((item, index) => (
          <li
            className={
              selectdIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
