import styled from 'styled-components';

import { JavaOriginal, PythonOriginal, GoOriginal, AmazonwebservicesOriginalWordmark, Html5Original, Css3Original, PandasOriginal, NumpyOriginal, TensorflowOriginal, KerasOriginal, JavascriptOriginal, ReactOriginal, GitOriginal, NpmOriginalWordmark, MatplotlibPlain, DockerOriginal } from 'devicons-react';

const StyledUl = styled.ul`
  list-style-type: none;

  height: 100px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
  gap: 20px;
  font-size: calc(20px + 2vw);

  /* These are set by default, but I wanted to write it out for clarity */
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`

export default function Skills() {
  return (
    <>
      <h2> Skills </h2>

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