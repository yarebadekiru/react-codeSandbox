import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const onChangeText = (e) => setText(e.target.value);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}></input>
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
