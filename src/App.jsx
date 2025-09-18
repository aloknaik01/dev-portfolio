import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/sub-components/Footer";
import { useEffect, useState } from "react";
import NoInternet from "./pages/sub-components/NoInternet";



function App() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={online ? <Home /> : <NoInternet />} />
            <Route path="/project/:id" element={<ProjectView />} />
          </Routes>
        </Router>
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" />
      </ThemeProvider>
    </>
  );
}

export default App;
