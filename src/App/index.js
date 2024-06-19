import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  return (
    <div>
      <Form currencies={currencies} />
    </div>
  );
}

export default App;