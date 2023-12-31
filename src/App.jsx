import { Outlet, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calendar from "./Pages/Calendar";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to left, #65b1ed 30%, #5a7ce9 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
