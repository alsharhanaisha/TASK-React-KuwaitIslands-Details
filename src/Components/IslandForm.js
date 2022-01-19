import { useState } from "react";
import IslandList from "./IslandList";

export default function IslandForm({ island, incrementVisitor }) {
  const [typeName, setTypeName] = useState("");
  const [typeNumber, setTypeNumber] = useState(0);

  const typingName = (event) => {
    setTypeName(event.target.value);
  };
  const typingNumber = (event) => {
    setTypeNumber(event.target.value);
  };

  const booking = () => {
    const confirmed = window.confirm(
      `Are you sure you want to book the islane Name: ${typeName} & ${typeNumber}`
    );
    if (confirmed) {
      incrementVisitor(island);
    }
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={typingName} />
      <input
        placeholder="Type Phone Number"
        type="tel"
        onChange={typingNumber}
      />
      <button className="book" onClick={booking}>
        Book for today!
      </button>
    </div>
  );
}
