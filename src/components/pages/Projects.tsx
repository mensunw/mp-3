import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const StyledBlock = styled.div`
  justify-content: space-between;
  display: flex;
`

const StyledP = styled.p`
  padding-left: calc(1px + 2vw);
`

const StyledOutputPositive = styled.div`
  color: #868e96;
`

const StyledOutputNegative = styled.div`
  color: red;
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

const StyledButton = styled.button`
  border: 2px solid black;
  &:hover {
    background: rgb(162, 199, 233);
  }
`

const StyledH2 = styled.h2`
  font-size: calc(30px + 2vw);
  color: #343a40;
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
`

export default function Projects() {
  // setting default to string for "empty" reasons
  const [inputOne, setInputOne] = useState<string>('')
  const [inputTwo, setInputTwo] = useState<string>('')
  const [result, setResult] = useState<string>('')
  // for every function, set to negative if negative, which will trigger red style container instead
  const [negative, setNegative] = useState<boolean>(false)

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

  // clear function
  function clearInput() {
    setInputOne('')
    setInputTwo('')
    setResult('')
  }

  // add function
  function addInput() {
    const res: number = Number(inputOne) + Number(inputTwo)
    setResult(String(res))
    // negative check
    if (res < 0) {
      setNegative(true)
    } else {
      setNegative(false)
    }
  }

  // sub function
  function subInput() {
    const res: number = Number(inputOne) - Number(inputTwo)
    setResult(String(res))
    // negative check
    if (res < 0) {
      setNegative(true)
    } else {
      setNegative(false)
    }
  }

  // mult function
  function multInput() {
    const res: number = Number(inputOne) * Number(inputTwo)
    setResult(String(res))
    // negative check
    if (res < 0) {
      setNegative(true)
    } else {
      setNegative(false)
    }
  }

  // div function
  function divInput() {
    const res: number = Number(inputOne) / Number(inputTwo)
    setResult(String(res))
    // negative check
    if (res < 0) {
      setNegative(true)
    } else {
      setNegative(false)
    }
  }

  // pow function
  function powInput() {
    const num1: number = Number(inputOne)
    const num2: number = Number(inputTwo)
    let res = 1;
    for (let i = 0; i < num2; i++) {
      res = res * num1;
    }
    setResult(String(res))
    // negative check
    if (res < 0) {
      setNegative(true)
    } else {
      setNegative(false)
    }
  }

  return (
    <>
      <StyledH2> Projects </StyledH2>

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
          <h3> A cool lil' calculator | React</h3>
          {/* update state to whatever the input is, put value as the state incase of clear */}
          n1: <StyledInput type="text" onChange={(e) => setInputOne(e.target.value)} value={inputOne} />

          n2: <StyledInput type="text" onChange={(e) => setInputTwo(e.target.value)} value={inputTwo} />
          <StyledClear onClick={clearInput} id="clear"> Clear </StyledClear>

          <StyledUl>
            <li>
              <StyledButton onClick={addInput}> + </StyledButton>
            </li>
            <li>
              <StyledButton onClick={subInput}> - </StyledButton>
            </li>
            <li>
              <StyledButton onClick={multInput}> * </StyledButton>
            </li>
            <li>
              <StyledButton onClick={divInput}> / </StyledButton>
            </li>
            <li>
              <StyledButton onClick={powInput}> ** </StyledButton>
            </li>
          </StyledUl>
          {/* show result from state here based on output and if negative or not */}
          {negative ? (
            <StyledOutputNegative>{result}</StyledOutputNegative>
          ) : (
            <StyledOutputPositive>{result}</StyledOutputPositive>
          )}

        </div>
        <StyledP>Feburary 2025 - Present</StyledP>
      </StyledBlock>
    </>
  )
}