// ALERT EXAMPLE
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span className="fw-bold">World</span>
      </Alert>
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
