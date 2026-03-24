import SEO from "./components/SEO";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import LeadMagnet from "./components/home/LeadMagnet";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Dra. Dina Reyes | Fisiatra y Logopedia en Estelí"
        description="Recupera tu libertad de movimiento y habla con confianza. Tratamientos cercanos, no invasivos y para todas las edades."
      />

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
