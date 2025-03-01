import styled from 'styled-components';

const StyledBlock = styled.div`
  justify-content: space-between;
  display: flex;
`
const StyledP = styled.p`
  padding-left: calc(1px + 2vw);
`

const StyledH2 = styled.h2`
  font-size: calc(30px + 2vw);
  color: #343a40;
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
`

export default function Experience() {
  return (
    <>
      {/* experience */}
      <StyledH2> Experience </StyledH2>

      <StyledBlock>
        <div>
          <h3>CS350 Distributed Systems Grader | Go</h3>
          <StyledP> Evaluated distributed systems assignments for a class of 200 students, provided in-depth feedback on key
            aspects
            such as performance optimization, concurrency issues, and ensuring fault tolerance in their
            implementations</StyledP>
        </div>
        <StyledP>Sept 2024- Dec 2024</StyledP>
      </StyledBlock>

      <StyledBlock>
        <div>
          <h3> CodeHive Fellowship | React, Django, TypeScript, TailWindCSS</h3>
          <StyledP>https://codehive.buzz/: Collaborated with a cross-functional team, including the product manager and
            scrum
            master, to build a web application for context-based project feedback and developer community connection
          </StyledP>
        </div>
        <StyledP>Sept 2024- Dec 2024</StyledP>
      </StyledBlock>

      <StyledBlock>
        <div>
          <h3> After School Youth Educator | Scratch</h3>
          <StyledP> Co-led daily educational planning and activities for 15 1st grade students, integrating data-driven
            approaches to
            tailor programs to their interests and needs
          </StyledP>
        </div>
        <StyledP> Summer 2024</StyledP>
      </StyledBlock>
    </>
  )
}