import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
