import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import OurGoal from './components/ourGoal';
import AboutUs from './components/aboutUs';
import Fundraiser from './components/fundraiser';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <HeroSection />
        <OurGoal />
        <AboutUs />
        <Fundraiser />

      </div>
    </ChakraProvider>
  );
}

export default App;
