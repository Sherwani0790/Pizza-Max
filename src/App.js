// Router import 
import { Route, BrowserRouter as Router } from "react-router-dom";
// Global css file
import './App.css';
// Components
import NavBar from './components/header/navbar';
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />

    </Router>
  );
}

export default App;
