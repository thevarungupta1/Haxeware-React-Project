import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  let routes;
  if (localStorage.token) {
    console.log(localStorage.token);
  } else {
    console.log("not logged in");
  }

  return localStorage.token ? (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/:id" element={<ProductPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        {/* <Route component={ErrorPage } /> */}
      </Routes>
    </Router>
  ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        {/* <Route component={ErrorPage } /> */}
      </Routes>
    </Router>
  );
}

export default App;
