import { NavBar } from "./components/NavBar";
const ItemListContainer = (props) => <div> {props.greetings} </div>
function App() {
  const mensajeBienvenida = "¡Bienvenido al mundo de la numismática!";
  return (
    <div>
      <NavBar />
      <ItemListContainer greetings={mensajeBienvenida} />
      <p> Todas las monedas comercializadas en este sitio tienen su código KM correspondiente y no son réplicas</p>
    </div>
      );
}

export default App;
