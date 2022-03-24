import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import MoreDetails from './pages/MoreDetails'

function App() {
  return (
    <div className="header">
      <Switch>
        <Route path="/details">
          <MoreDetails />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
