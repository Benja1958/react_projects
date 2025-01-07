import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/alert";

function App() {
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      {alertVisible &&<Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
