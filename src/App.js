import "./App.css";
import logo from "./assets/beach.jpg";

function App() {
  return (
    <>
      <h3>My First Webpage</h3>
      <h1>I Really love beach</h1>
      <p>Hello world!</p>
      <img src={logo} style={{ width: "500px" }} alt="" />
    </>
  );
}

export default App;
