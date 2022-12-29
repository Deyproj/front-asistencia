import NavBar from "./components/layout/NavBar";
import Asistencia from "./views/asistencia";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Actual from "./views/actual";
import Users from "./views/users";
import Footer from "./components/layout/Footer";
import { Row } from "reactstrap";
import Login from "./views/login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/asistencia" element={<Asistencia />} />
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
