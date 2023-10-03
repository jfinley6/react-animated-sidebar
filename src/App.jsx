import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calendar from "./Pages/Calendar";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #2626f8 30%, #070379 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
