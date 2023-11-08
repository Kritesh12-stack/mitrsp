import Navbar from "./Components/Navbar"
import "./App.css"
import Carousal from "./Components/Carousal"
import Partners from "./Components/Partners"
import Problems from "./Components/Problems"
import ChooseUs from "./Components/ChooseUs"
import Footer from "./Components/Footer"
import ServicesUpdated from "./Components/ServicesUpdated"


function App() {

  return (
    <>
      <Navbar />
      <Carousal />
      <Partners />
      <ServicesUpdated/>
      <Problems />
      <ChooseUs />
      <Footer />
    </>
  );
}

export default App
