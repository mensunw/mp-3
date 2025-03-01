import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Header from "./components/universal/Header.tsx";
import Nav from "./components/universal/Nav.tsx";
import Footer from "./components/universal/Footer.tsx";

import Home from "./components/pages/Home.tsx";
import Education from "./components/pages/Education.tsx";

/* for global styles (Re-set browser defaults & make all box sizes include padding and border) */
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`

const StyledPageWrapper = styled.div`
  font-family: 'Open Sans', Serif;
  color: #868e96;
  font-size: calc(10px + 0.5vw);
  background-color: rgb(202, 240, 255);
  width: 80vw;
  margin: 0 auto;
`

function Root() {

  return (
    <>
      <GlobalStyles />
      <StyledPageWrapper>
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

      </StyledPageWrapper>
    </>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }])

function App() {

  return <RouterProvider router={router} />
}

export default App