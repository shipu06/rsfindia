import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Fundraiser from './components/fundraiser';
// import AllMember from './components/member';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import AboutUs from './pages/about';
import LatestCause from './pages/cause';
import { Container } from '@chakra-ui/react';
import PageNotFound from './pages/page-not-found';
import SignUpComponent from './pages/register';
import DonationForm from './pages/donation';


function App() {
  return (
    <BrowserRouter>
      <Container maxW={'100vw'} overflowX={'hidden'} p='0px' m='0px' minH={'90vh'}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/latest-cause' element={<LatestCause />} />
          <Route path='/contact' element={<SignUpComponent />} />
          <Route path='/donation' element={<DonationForm />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
