import UseCounter from "./Components/UseCounter";
import UserList from "./Components/UserList";
import WindowSizeApp from "./Components/WindowSizeApp";
import "./App.css";
import TimeCounter from "./Components/TimeCounter";

export default function App() {

  //boolean que indica si se muestra o no el componente 
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(!show);

  //funcion que se ejecuta al hacer click en el boton

  return (
    <div>
      <h1>Hoocks personalizados</h1>
      <button>Use Counter</button>
      <UseCounter />
      <UserList />
      <WindowSizeApp />
      <TimeCounter />
    </div>
  );
}
