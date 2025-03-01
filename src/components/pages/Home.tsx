import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import LinkedinOriginal from 'devicons-react/lib/icons/LinkedinOriginal';
import FacebookOriginal from 'devicons-react/lib/icons/FacebookOriginal';
// devicon doc i used here: https://devicons-react.vercel.app/latest

import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 10px;

  /* These are set by default, but I wanted to write it out for clarity */
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;

  /* Override any default styles for svg size */
  svg {
    width: calc(20px + 2vw) !important;  
    height: calc(20px + 2vw) !important;
  }
`

const StyledH1 = styled.h1`
  font-size: calc(30px + 2vw);
  color: #343a40;
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
`

export default function Home() {
  return (
    <>
      <StyledH1> Home </StyledH1>

      <p>Hi, I'm Mensun Wang, a Computer Science student at Boston University with a strong passion for full-stack
        development and machine learning. I am dedicated to exploring their applications in solving real-world
        challenges and continuously refining my expertise in building efficient, data-driven applications.</p>
      <p>Welcome to my personal website—an interactive and visually engaging version of my resume. Here, you'll find
        detailed insights into my skills, experience, and projects. While I no longer play Minecraft, I wanted to
        incorporate a gamified design to make this site feel both personal and creative. Feel free to explore and
        experience its responsiveness firsthand!</p>

      {/* Icon list (from w3schools) */}
      <StyledUl>
        <li>
          <a href="https://www.linkedin.com/in/mensun/">
            <LinkedinOriginal />
          </a>
        </li>
        <li>
          <a href="https://github.com/mensunw">
            <GithubOriginal />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/mensun.wang/">
            <FacebookOriginal />
          </a>
        </li>
      </StyledUl>
    </>
  )
}