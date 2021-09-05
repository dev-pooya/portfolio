import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App flex">
      <Sidebar />

      <Main />
    </div>
  );
}

export default App;
