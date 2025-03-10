import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserDetails from "./UserDetails";
import useTheme from "./useTheme";
import { useEffect } from "react";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <header>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/utente/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
