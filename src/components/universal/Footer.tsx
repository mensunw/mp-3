import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-image: url("/grass-block.png");
  height: calc(50px + 10vw);
  color: white;
  align-items: center;

  /* These are set by default, but I wanted to write it out for clarity */
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;
`
const StyledA = styled.a`
  color: white;
`

export default function Footer() {
  return (
    <StyledFooter>
      {/* footer */}
      <p> All rights reserved. <StyledA href="#"> Credits </StyledA> &#169;</p>
    </StyledFooter>
  )
}