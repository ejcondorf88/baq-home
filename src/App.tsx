import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaymentForm from './pages/PaymentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
