import React from "react";
var isDone = false;

const lineThrough = { textDecoration: "line-through" };
function cross() {
  isDone = true;
}

function unCross() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? lineThrough : null}>Buy milk</p>
      <button onClick={cross}>Done</button>
      <button onClick={unCross}>Not Done</button>
    </div>
  );
}

export default App;
