// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./Accueil";
import APropos from "./APropos";
import ListDeparts from "./ListDeparts";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
            
          <ul>
            <li>
              <Link to="/accueil">Accueil</Link>
            </li>
            <li>
              <Link to="/apropos">A propos</Link>
            </li>
            <li>
              <Link to="/departements">Départements</Link>
            </li>
          </ul>
        </nav>
        <br/>
        <Routes>
          <Route path="/accueil" element={<Accueil/>} />
          <Route path="/apropos" element={<APropos/>} />
          <Route path="/departements" element={<ListDeparts/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
