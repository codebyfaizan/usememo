import React from "react";
import "./App.css";
import Demo from "./components/Demo/Demo";
import Button from "./components/UI/Button";

function App() {
  const [listTitle, setListTitle] = React.useState("My List");

  const changeTitleHandler = React.useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = React.useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <Demo title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
