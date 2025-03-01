import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledBlock = styled.div`
  justify-content: space-between;
  display: flex;
`

const StyledP = styled.p`
  padding-left: calc(1px + 2vw);
`

const StyledOutput = styled.div`
  color: #868e96;
`

const StyledInput = styled.input`
  width: 10vw;
}
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 2vw;
  justify-content: center;
`

const StyledClear = styled.button`
  background-color: rgb(241, 178, 178);
  &:hover {
    background: rgb(252, 144, 144);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border-color: rgb(0, 0, 0);
  }
`

export default function Projects() {
  // setting default to string for "empty" reasons
  const [inputOne, setInputOne] = useState<String>('')
  const [inputTwo, setInputTwo] = useState<String>('')

  // clear function
  function clearInput() {
    setInputOne('')
    setInputTwo('')
  }

  // add function
  function addInput() {
    setInputOne('')
    setInputTwo('')
  }

  // sub function
  function subInput() {
    setInputOne('')
    setInputTwo('')
  }

  // mult function
  function multInput() {
    setInputOne('')
    setInputTwo('')
  }

  // div function
  function divInput() {
    setInputOne('')
    setInputTwo('')
  }

  // add function
  function powInput() {
    setInputOne('')
    setInputTwo('')
  }

  return (
    <>
      <h2> Projects </h2>

      <StyledBlock>
        <div>
          <h3> Game Outcome Predictor | Python, React, Next.js, Django</h3>
          <StyledP> https://ipsur.com/: Developed and fitted a decision tree classification model using scikit-learn to
            analyze
            historical game data, achieving 53% accuracy in predicting League of Legends match outcomes</StyledP>
        </div>
        <StyledP>May 2024 - Present</StyledP>
      </StyledBlock>

      <StyledBlock>
        <div>
          <h3> Grub Gallery | React, TypeScript, HTML, CSS</h3>
          <StyledP>https://grub-gallery.vercel.app/: Collaborated with 4 others to invent an application which allows users
            to discover and personalize dishes and recipes effortlessly
          </StyledP>
        </div>
        <StyledP>Sept 2023 - Dec 2023</StyledP>
      </StyledBlock>

      <StyledBlock>
        <div>
          <h3> A cool lil' calculator | HTML, CSS, JS</h3>
          n1: <StyledInput type="text" />

          n2: <StyledInput type="text" />
          <StyledClear onClick={clearInput} id="clear"> Clear </StyledClear>

          <StyledUl>
            <li>
              <button onClick={addInput}> + </button>
            </li>
            <li>
              <button onClick={subInput}> - </button>
            </li>
            <li>
              <button onClick={multInput}> * </button>
            </li>
            <li>
              <button onClick={divInput}> / </button>
            </li>
            <li>
              <button onClick={powInput}> ** </button>
            </li>
          </StyledUl>

          <StyledOutput></StyledOutput>
        </div>
        <StyledP>Feburary 2025 - Present</StyledP>
      </StyledBlock>
    </>
  )
}