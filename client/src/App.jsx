import React, { useState } from "react";
import Sidebar from "./Components/SIdebar";
import { Route, Routes, useLocation } from "react-router-dom";
import ChatBox from "./Components/ChatBox";
import Credits from "./Pages/Credits";
import Community from "./Pages/Community";
import { assets } from "./assets/assets"; 
import Loading from "./Pages/Loading";
import { useAppContext } from "./Context/AppContext";
import Login from "./Pages/Login";

const App = () => {
  const { user, setUser } = useAppContext();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  if (pathname === "/loading") return <Loading />;

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
      {!isMenuOpen && (
        <img
          src={assets.menu_icon}
          className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert"
          onClick={() => setMenuOpen(true)}
          alt="Open menu"
        />
      )}
      <div className="bg-white dark:bg-black dark:text-white">
        <div className="flex h-screen w-screen">
          <Sidebar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
