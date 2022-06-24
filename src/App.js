import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="WrapperTitle">
        <span className="Title">
          Escolha o pacote que deseja comprar abaixo:
        </span>
      </div>
      <div className="WrapperOptions">
        <Link to="/under">
          <button className="Options">Combo Econômico</button>
        </Link>
        <Link to="/over">
          <button className="Options">Combo Express</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
