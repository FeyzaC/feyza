import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import PrivateRouter from "./pages/PrivateRouter";
import Instagram from "./pages/Instagram";
import Facebook from "./pages/Facebook";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/people" element={<PrivateRouter />} />
        <Route path="" element={<People />}></Route>

        <Route path="/contact" element={<Contact />}>
          <Route index element={<Instagram />} />
          <Route path="facebook" element={<Facebook />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
