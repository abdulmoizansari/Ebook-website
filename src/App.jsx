import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Expertise from "./components/Expertise";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PromoBanner />
        <Expertise />
        <Projects />
        <Reviews />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
