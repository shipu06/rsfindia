import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
      </div>
    </ChakraProvider>
  );
}

export default App;
