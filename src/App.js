import "./App.css";
import Footer from "./components/Footer";
import KitapListesi from "./components/KitapListesi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <KitapListesi />
      <Footer />
    </div>
  );
}

export default App;
