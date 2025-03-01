import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Header from "./components/universal/Header.tsx";
import Nav from "./components/universal/Nav.tsx";
import Footer from "./components/universal/Footer.tsx";

import Home from "./components/pages/Home.tsx";
import Education from "./components/pages/Education.tsx";
import Skills from "./components/pages/Skills.tsx";
import Experience from "./components/pages/Experience.tsx";
import Projects from "./components/pages/Projects.tsx";
import Interests from "./components/pages/Interests.tsx";

/* for global styles (Re-set browser defaults & make all box sizes include padding and border) */
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`

const StyledPageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`

const StyledBody = styled.div`
  font-family: 'Open Sans', Serif;
  color: #868e96;
  font-size: calc(10px + 0.5vw);
  background-color: rgb(202, 240, 255);
`

const StyledContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  /* These are set by default, but I wanted to write it out for clarity */
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;
  align-items: stretch;
`

const StyledMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #faebd7;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 13%;
  gap: 6vh;
  background-image: url("/oak-plank.png");
  /* These are set by default, but I wanted to write it out for clarity */
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;
`

function Root() {

  return (
    <>
      <GlobalStyles />
      <StyledBody>
        <StyledPageWrapper>
          <Header />
          <StyledContainer>
            <Nav />
            <StyledMain>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/interests" element={<Interests />} />
              </Routes>
            </StyledMain>
          </StyledContainer>
          <Footer />
        </StyledPageWrapper>
      </StyledBody>
    </>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }])

function App() {

  return <RouterProvider router={router} />
}

export default App