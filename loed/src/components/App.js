import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} LOG</footer>
    </>
  );
}

export default App;
