// Router import 
import { Route, BrowserRouter as Router } from "react-router-dom";
// Global css file
import './App.css';
// Components
import NavBar from './components/header/navbar';
import Home from "./pages/Home";
import { CartProvider } from "./utils/cartContext";


function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />

    </Router>
    </CartProvider>
  );
}

export default App;
