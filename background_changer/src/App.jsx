import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const updateColor = (change) => {
    setColor(change);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200  "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex bottom-12 inset-x-0 justify-center">
          <div className="buttons contain px-3 py-2 bg-white flex flex-wrap justify-center gap-3 rounded-3xl ">
            <button
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={() => updateColor("red")}
            >
              Red
            </button>
            <button
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={() => updateColor("green")}
            >
              Green
            </button>
            <button
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={() => updateColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
