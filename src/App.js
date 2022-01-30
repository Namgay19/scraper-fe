import Footer from "./components/footer";
import Hero from "./components/hero";
import MainSection from "./components/mainSection";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="font-sans">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bhutan Notifications</title>
      </Helmet>
      <div className="px-0 py-5 md:px-10 md:py-10 lg:px-40 lg:py-10">
        <Hero />
        <MainSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
