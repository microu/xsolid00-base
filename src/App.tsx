import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
//import './App.css'

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div id="main">
      <div id="banner">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo vite" alt="Vite logo" />
        </a>
        <div id="banner-title">
          <h2>XSOLID = Vite + Solid + ...</h2>
        </div>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <div id="main-content">
        [SOME CONTENT HERE]
        <button onClick={() => setCount(count() + 1)} class="counter">
          Count is: {count()}
        </button>
      </div>
    </div>
  );
}

export default App;
