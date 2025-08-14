import { useState } from "react";
import EventList from "./components/EventList";
import Header from "./components/Header";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchChange = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className="bg-body-tertiary" style={{ height: "1000px" }}>
      <Header onSearchChange={onSearchChange} />
      <EventList searchTerm={searchTerm} />
    </div>
  );
};
export default App;
