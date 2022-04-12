import "./App.css";
import TopLayout from "./Components/Top/TopLayout";
import MiddleLayout from "./Components/Middle/MiddleLayout";
import LowerLayout from "./Components/Lower/LowerLayout";
import FooterLayout from "./Components/Footer/FooterLayout";

function App() {
  return (
    <div className="App">
      <TopLayout />
      <MiddleLayout />
      <LowerLayout />
      <FooterLayout />
    </div>
  );
}

export default App;
