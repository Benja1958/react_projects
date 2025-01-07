import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;



