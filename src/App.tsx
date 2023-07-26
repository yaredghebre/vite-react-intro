// ALERT and BUTTON EXAMPLE
import { Children, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // state variable
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span className="fw-bold">World</span>
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Send
      </Button>
    </div>
  );
}

export default App;

// LIST GROUP EXAMPLE
// import Message from "./Message"
// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["Roma", "Milano", "Venezia", "Napoli"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
