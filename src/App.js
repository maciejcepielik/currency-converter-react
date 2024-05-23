import Form from "./Form";

const currencies = [
  { id: 1, name: "Euro", shortcut: "EUR", value: 4.51 },
  { id: 2, name: "Dolar amerykański", shortcut: "USD", value: 4.15 },
  { id: 3, name: "Frank szwajcarski", shortcut: "CHF", value: 4.62 },
  { id: 4, name: "Funt brytyjski", shortcut: "GBP", value: 5.18 },
];

function App() {
  return (
    <div>
       <Form currencies={currencies} />
    </div>
 );
}

export default App;
