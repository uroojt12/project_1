import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/includes/footer";
import Header from "./components/includes/header";
// import Home from "./components/pages/home";
import About from "./components/pages/about";
import Insurance from "./components/pages/insurance";
import Benefits from "./components/pages/benefits";
import Risk from "./components/pages/risk";
import Request from "./components/pages/request";
import Contact from "./components/pages/contact";
import Home_1 from "./components/pages/Home_1";
function App() {
  const PageLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route exact path="/" element={<Home_1 />} />
            <Route exact path="/insurance" element={<Insurance />} />{" "}
            <Route exact path="/benefits" element={<Benefits />} />{" "}
            <Route exact path="/risk" element={<Risk />} />{" "}
            <Route exact path="/about" element={<About />} />{" "}
            <Route exact path="/request" element={<Request />} />{" "}
            <Route exact path="/contact" element={<Contact />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
