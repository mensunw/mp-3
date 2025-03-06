import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { JavaOriginal, PythonOriginal, GoOriginal, AmazonwebservicesOriginalWordmark, Html5Original, Css3Original, PandasOriginal, NumpyOriginal, TensorflowOriginal, KerasOriginal, JavascriptOriginal, ReactOriginal, GitOriginal, NpmOriginalWordmark, MatplotlibPlain, DockerOriginal } from 'devicons-react';

const StyledUl = styled.ul`
  list-style-type: none;

  height: 100px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
  gap: 20px;

  /* These are set by default, but I wanted to write it out for clarity */
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;

  /* Override any default styles for svg size */
  svg {
    width: calc(20px + 2vw) !important;  
    height: calc(20px + 2vw) !important;
  }
`

const StyledH2 = styled.h2`
  font-size: calc(30px + 2vw);
  color: #343a40;
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
`

export default function Skills() {
  /* set title based on url */
  const currentPath = useParams();
  let lastValue = Object.values(currentPath).pop() || "";
  lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
  useEffect(() => {
    if (lastValue === "") {
      document.title = "Home | Resume";
    } else {
      document.title = lastValue + " | Resume";
    }
  }, [lastValue])
  return (
    <>
      {/* my list of icons representing skills I have */}
      <StyledH2> Skills </StyledH2>

      <h3>Programming Languages &amp; Tools</h3>
      <StyledUl>
        <li>
          <JavaOriginal />
        </li>
        <li>
          <PythonOriginal />
        </li>
        <li>
          <GoOriginal />
        </li>
        <li>
          <AmazonwebservicesOriginalWordmark />
        </li>
        <li>
          <Html5Original />
        </li>
        <li>
          <Css3Original />
        </li>
        <li>
          <PandasOriginal />
        </li>
        <li>
          <NumpyOriginal />
        </li>
        <li>
          <TensorflowOriginal />
        </li>
        <li>
          <KerasOriginal />
        </li>
        <li>
          <JavascriptOriginal />
        </li>
        <li>
          <ReactOriginal />
        </li>
        <li>
          <GitOriginal />
        </li>
        <li>
          <NpmOriginalWordmark />
        </li>
        <li>
          <MatplotlibPlain />
        </li>
        <li>
          <DockerOriginal />
        </li>
      </StyledUl>
    </>
  )
}