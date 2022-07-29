import Welcome from "./components/Headline/Home";
import Intro from "./components/Intro/Intro";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Welcome />
      <Intro />
      <Gallery />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
