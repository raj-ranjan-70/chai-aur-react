import TodoList1 from "./components/TodoList1";
import Input from "./components/Input";
import Display from "./components/Display";
import { useState } from "react";
import Demo from "./components/ClassDemo";
function App() {
  const [value, setState] = useState(0);
  return (
    <>
    <TodoList1></TodoList1>
    <Input setState={setState}></Input>
    <Display value={value}></Display>
    <Demo></Demo>
    </>
  )
}

export default App
