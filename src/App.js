import './App.css'
import HomeScreen from './Components/HomeScreen'
import Navbar from './Components/Navbarx'
import ProductScreen from './Components/ProductScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaymentScreen from './Components/PaymentScreen'
import Success from './Components/Success'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/product/:id' element={<ProductScreen />} />
        <Route path='/payment/:price' element={<PaymentScreen />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
