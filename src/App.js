import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Orders from "./components/Orders";

const name = "John";
const surname = "Doe";
const isLoggedIn = true;

function App() {
  return (
    <div className="App container mt-4">
      <Header name={name} surname={surname} isLoggedIn={isLoggedIn} />
      <Orders
        orderNo="0001"
        name={name}
        surname={surname}
        content={["Çorba", "Köfte", "Ayran"]}
      />
    </div>
  );
}

export default App;
