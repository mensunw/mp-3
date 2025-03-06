import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const StyledBlock = styled.div`
  justify-content: space-between;
  display: flex;
`

const StyledP = styled.p`
  padding-left: calc(1px + 2vw);
`

const StyledImg = styled.img`
  width: 15vw;
  border-radius: 50%;
  display: inline;
  margin: 2%;
`

const StyledImgTwo = styled.img`
  width: 8vw;
  border-radius: 50%;
  display: inline;
  margin: 2%;
`

const StyledH2 = styled.h2`
  font-size: calc(30px + 2vw);
  color: #343a40;
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
`

export default function Education() {
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
      {/* education*/}
      <StyledH2> Education </StyledH2>

      <StyledBlock>
        <div>
          <h3>Boston University</h3>
          <StyledP>Bachelors of Arts</StyledP>
          <StyledP>Computer Science</StyledP>
          <StyledP>GPA: 3.9</StyledP>
        </div>
        <StyledImg src="/bu.png" />
      </StyledBlock>
      <StyledBlock>
        <div>
          <h3>Bayside High School</h3>
          <StyledP>Computer Science Program</StyledP>
          <StyledP>GPA: 3.9</StyledP>
        </div>
        <StyledImgTwo src="/bhs.png" />
      </StyledBlock>
    </>
  )
}