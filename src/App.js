import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddNote from "./pages/AddNote";
import Archived from "./pages/Archived";
import Detail from "./pages/Detail";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";
import "./style/app.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/' className="logo">Notes App</Link>
        <div className="nav__right">
          <Link to='/notes/add'>Add Note</Link>
          <Link to='/notes/archived'>Archived</Link>
        </div>
      </nav>
      <main>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/notes/add" element={<AddNote />} />
            <Route path="/notes/:id" element={<Detail />} />
            <Route path="/notes/archived" element={<Archived />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
