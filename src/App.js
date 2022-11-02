import NavBar from "./components/layout/NavBar";
import Asistencia from "./asistencia";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Actual from "./actual";
import Users from "./users";
import Footer from "./components/layout/Footer";
import { Row } from "reactstrap";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Asistencia />} />
          <Route path="/actual" element={<Actual />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Row>
          <Footer />
        </Row>
      </Router>
    </>
  );
}

export default App;
