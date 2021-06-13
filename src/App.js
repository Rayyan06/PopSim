import "./App.css";
import Canvas from "./Canvas.js";
import { WIDTH, HEIGHT } from "./constants.js"
import Simulation from "./Simulation.js";

function App() {
  let simulation = new Simulation();
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    simulation.draw(ctx);

  };
  const setup = (ctx) => {
    ctx.canvas.width = WIDTH;
    ctx.canvas.height = HEIGHT;
    simulation.setup();
  };
  return (
    <div className="App">
      <h1>Pursuit Stuff</h1>
      <Canvas className="App-canvas" draw={draw} setup={setup} />
    </div>
  );
}

export default App;
