
import "./styles/_reset.css";
import "./styles/global.scss";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import FloatingMenu from "./components/floatingMenu/FloatingMenu.jsx";

import Homepage from "./components/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





const App = () => {

  return (
    <>
      <Router>
        <AppHeader/>

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <AppFooter />
        <FloatingMenu/>
      </Router>

    </>
  );
};

export default App;
