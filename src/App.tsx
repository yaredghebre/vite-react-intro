// import Message from "./Message"
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Roma", "Milano", "Venezia", "Napoli"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
