import { ThemeProvider } from "styled-components";
import Form from "./Form";
import { currencies } from "./currencies";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Form currencies={currencies} />
      </div>
    </ThemeProvider>
  );
}

export default App;