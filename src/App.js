
import './App.css';
import './Components/Products/AddProduct'
import { BrowserRouter } from 'react-router-dom';

import { Container } from './Routes/Container';
import Footer from './Components/Homepage/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Container/>
    <Footer />

    
    </BrowserRouter>
    </>
    
    
    
    
  )}

export default App;
