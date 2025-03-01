import { Link } from "react-router"
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 10vw;
  border-radius: 50%;
  display: inline;
  margin: 2%;
`

const StyledNav = styled.nav`
  display: flex;
  min-width: 30%;
  max-width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/dark-oak-log.png");

  /* These are set by default, but I wanted to write it out for clarity */
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;
`

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  gap: 2vh;

  /* These are set by default, but I wanted to write it out for clarity */
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;
`

const StyledLi = styled.li`
  display: flex;
  background: rgba(16, 12, 12, 0.037);
  width: calc(40px + 5vw);
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(134, 161, 166, 0.6);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* Es needed for glass boxes */
  position: relative;

  /* Font */
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
  font-size: calc(10px + 0.5vw);

  /* These are set by default, but I wanted to write it out for clarity */
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border-color: rgba(134, 161, 166, 1);
  }
`

const StyledLink = styled(Link)`
  background: white;
  text-decoration: none;
`

const StyledGlass1 = styled.div`
  position: absolute;
  background-color: rgba(134, 161, 166, 0.6);
  height: 4px;
  width: 4px;
  top: 20%;
  left: 9.5%;
  border: 1px solid rgba(134, 161, 166, 0.6);
`

const StyledGlass2 = styled.div`
  position: absolute;
  background-color: rgba(134, 161, 166, 0.6);
  height: 4px;
  width: 4px;
  top: 35%;
  left: 6%;
  border: 1px solid rgba(134, 161, 166, 0.6);
`

const StyledGlass3 = styled.div`
  position: absolute;
  background-color: rgba(134, 161, 166, 0.6);
  height: 4px;
  width: 4px;
  top: 51%;
  left: 2.5%;
  border: 1px solid rgba(134, 161, 166, 0.6);
`

const StyledGlass4 = styled.div`
  position: absolute;
  background-color: rgba(134, 161, 166, 0.6);
  height: 4px;
  width: 4px;
  top: 51%;
  left: 90%;
  border: 1px solid rgba(134, 161, 166, 0.6);
`

const StyledGlass5 = styled.div`
  position: absolute;
  background-color: rgba(134, 161, 166, 0.6);
  height: 4px;
  width: 4px;
  top: 69%;
  left: 86.5%;
  border: 1px solid rgba(134, 161, 166, 0.6);
`

export default function Nav() {
  return (
    <StyledNav>
      <StyledImg src="/profile.jpg" alt="photo of Mensun Wang" id="pfp" />
      <StyledUl>
        <StyledLink to="/">
          <StyledLi>
            <StyledGlass1></StyledGlass1>
            <StyledGlass2></StyledGlass2>
            <StyledGlass3></StyledGlass3>
            <StyledGlass4></StyledGlass4>
            <StyledGlass5></StyledGlass5>
            Home
          </StyledLi>
        </StyledLink>
        <StyledLink to="/education">
          <StyledLi>
            <StyledGlass1></StyledGlass1>
            <StyledGlass2></StyledGlass2>
            <StyledGlass3></StyledGlass3>
            <StyledGlass4></StyledGlass4>
            <StyledGlass5></StyledGlass5>
            Education
          </StyledLi>
        </StyledLink>
        <StyledLink to="/skills">
          <StyledLi>
            <StyledGlass1></StyledGlass1>
            <StyledGlass2></StyledGlass2>
            <StyledGlass3></StyledGlass3>
            <StyledGlass4></StyledGlass4>
            <StyledGlass5></StyledGlass5>
            Skills
          </StyledLi>
        </StyledLink>
        <StyledLink to="/experience">
          <StyledLi>
            <StyledGlass1></StyledGlass1>
            <StyledGlass2></StyledGlass2>
            <StyledGlass3></StyledGlass3>
            <StyledGlass4></StyledGlass4>
            <StyledGlass5></StyledGlass5>
            Experience
          </StyledLi>
        </StyledLink>
        <StyledLink to="/projects">
          <StyledLi>
            <StyledGlass1></StyledGlass1>
            <StyledGlass2></StyledGlass2>
            <StyledGlass3></StyledGlass3>
            <StyledGlass4></StyledGlass4>
            <StyledGlass5></StyledGlass5>
            Projects
          </StyledLi>
        </StyledLink>
        <StyledLink to="/interests">
          <StyledLi>
            <StyledGlass1></StyledGlass1>
            <StyledGlass2></StyledGlass2>
            <StyledGlass3></StyledGlass3>
            <StyledGlass4></StyledGlass4>
            <StyledGlass5></StyledGlass5>
            Interests
          </StyledLi>
        </StyledLink>
      </StyledUl>
    </StyledNav>
  )
}