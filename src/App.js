import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add/projects" component={AddProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
