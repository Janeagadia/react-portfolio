import "./App.css";
import "./Queries.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
