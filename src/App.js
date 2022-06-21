import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProject from "./pages/AddProject";
import AddClient from "./pages/AddClient";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add/projects" component={AddProject} />
          <Route path="/add/client" component={AddClient} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
