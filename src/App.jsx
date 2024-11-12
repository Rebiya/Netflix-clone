import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
