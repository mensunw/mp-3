import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Header from "./components/universal/Header.tsx";
import Nav from "./components/universal/Nav.tsx";
import Footer from "./components/universal/Footer.tsx";

import Home from "./components/pages/Home.tsx";
import Education from "./components/pages/Education.tsx";

function Root() {

  return (
    <div id="page-wrapper">
      <Header />
      <div id="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </main>
      </div>
      <Footer />

    </div>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }])

function App() {

  return <RouterProvider router={router} />
}

export default App