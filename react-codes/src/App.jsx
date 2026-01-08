import CounterWithClassComponent from "./components/CounterWithClassComponent"
import Stopwatch from "./components/stopwatch"
import TodoList from "./components/TodoList"
import ProfileCard from "./components/ProfileUsingProps"
function App() {
  let name1 = "Raj Ranjan";
  let quote1 = "The best way to get started is to quit talking and begin doing.";
  let name2 = "Sara Smith";
  let quote2 = "Don't let yesterday take up too much of today.";
  return (
    <>
    {/* <CounterWithClassComponent initialvalue = {10}></CounterWithClassComponent> */}
    {/* <Stopwatch></Stopwatch> */}
    <TodoList></TodoList>
    <ProfileCard name = {name1} quote = {quote1}></ProfileCard>
    <ProfileCard name = {name2} quote = {quote2}></ProfileCard>
    </>
  )
}

export default App
