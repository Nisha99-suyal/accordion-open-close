import faqs from "./faq";
import "./App.css";
import Accordian from "./components/Accordian";

function App() {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
}

export default App;
