import SEO from "./components/SEO";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import LeadMagnet from "./components/home/LeadMagnet";
import Footer from "./components/layout/Footer";
import { SEO_DATA } from "./constants";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO title={SEO_DATA.title} description={SEO_DATA.description} />

      <Navbar />

      <main className="grow">
        <Hero />
        <Services />
        <LeadMagnet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
