import Footer from "./components/footer";
import Hero from "./components/hero";
import MainSection from "./components/mainSection";

function App() {
  return (
    <div className="font-sans">
      <div className="px-0 py-5 md:px-10 md:py-10 lg:px-40 lg:py-10">
        <Hero />
        <MainSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
