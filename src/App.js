import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { HomePage } from './pages/homePage/HomePage';
import { Footer } from './components/footer/Footer';
import { Register } from "./components/modals/register/Register";
import { Fpwd } from "./components/modals/fpwd/Fpwd";
import { ProfilePage } from "./pages/profilePage/ProfilePage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot_password" element={<Fpwd/>}/>
        <Route path="/profile_page" element={<ProfilePage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
