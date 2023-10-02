import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fundraiser from './components/fundraiser';
import AllMember from './components/member';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Container } from '@chakra-ui/react';
import Homepage from './pages/homepage';


function App() {
  return (
    <Router>
      <Navbar />
      <Container className='container' maxW={'100%'} m={'0px'} p={'0px'} mt={'6vh'} >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fundraiser" element={<Fundraiser />} />
          <Route path="*" element={<AllMember />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
