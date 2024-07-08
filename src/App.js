import { useEffect, useState } from "react";
import CalenderView from "./components/mainCalender/CalenderView";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const params = new URLSearchParams(window.location.search);
  const jwtToken = params.get("token");
  if (jwtToken) {
    localStorage.setItem("token", jwtToken);
  }
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const [isAuth, setIsAuth] = useState(token ? true : false);
  useEffect(() => {
    if (jwtToken) {
      try {
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        console.log("ex");
        setAutoLogout(remainingMilliseconds);
      } catch (error) {
        console.error("Invalid JWT token");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    console.log(remainingMilliseconds);

    setAutoLogout(remainingMilliseconds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const logoutHandler = () => {
    // setIsAuth(false);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <CalenderView
                  jwtToken={jwtToken}
                  token={token}
                  logoutHandler={logoutHandler}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<LoginPage token={token} />} />
          <Route path="/error/:errMsg" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
