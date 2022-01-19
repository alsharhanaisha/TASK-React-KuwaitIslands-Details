import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islandsData from "./data/islands";

function App() {
  const [islands, setIslands] = useState(islandsData);
  const [island, setIsland] = useState(islands[6]);

  const incrementVisitor = (island) => {
    island.visitor++;
    setIslands([...islands]);
    alert("island is booked");
  };
  return (
    <div>
      <Header />
      <div className="homePage">
        <IslandList setIsland={setIsland} />
        <IslandForm island={island} incrementVisitor={incrementVisitor} />
      </div>
    </div>
  );
}

export default App;
