import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getUserLogged } from "./utils/network-data";
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";

import Navbar from "./components/Navbar";

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import Detail from "./pages/Detail";
import Archived from "./pages/Archived";
import NotFound from "./pages/NotFound";

import "./style/app.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);
  
  async function setUserLogged() {
    const {data} = await getUserLogged()
    setUser(data)
  }
  
  useEffect(() => {
    setUserLogged()
  }, [])
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeContextValue = useMemo(() => {
    return {
      isDark,
      toggleTheme
    };
  }, [isDark]);

  const userContextValue = useMemo(() => {
    return {
      user,
      setUser
    };
  }, [user]);
  
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <BrowserRouter>
          <Navbar />
          <main>
              <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/notes/add" element={<AddNote />} />
                <Route path="/notes/:id" element={<Detail />} />
                <Route path="/notes/archived" element={<Archived />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
          </main>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
