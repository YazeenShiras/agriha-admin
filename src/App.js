import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Payments from "./components/Payments";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bodyContainer">
        <Sidebar />
        <Main />
        <Payments />
      </div>
    </div>
  );
}

export default App;
