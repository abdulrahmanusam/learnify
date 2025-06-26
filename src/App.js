import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import CoursesSection from './components/CoursesSection';
import Testimonials from './components/Testimonials';
import EnrollNowSection from './components/EnrollNowSection';
import Footer from './components/Footer';
function App() {
  return (
  <>
    <Header />
    <HeroSection />
    <WhyChooseUs />
    <CoursesSection />
    <Testimonials />
    <EnrollNowSection />
    <Footer />
  </>

  );
}

export default App;
