import styled from 'styled-components';

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

export default function Education() {
  return (
    <>
      <h2> Education </h2>

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
        <StyledImg src="/bhs.png" />
      </StyledBlock>
    </>
  )
}