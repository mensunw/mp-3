import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  background-image: url("/stone-brick.png");
  box-shadow: 1px 1px;
  min-width: 100%;
  align-items: center;

  /* These are set by default, but I wanted to write it out for clarity */
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-basis: auto;
`

const StlyedH1 = styled.h1`
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: calc(0px + 5vw);
  color: white;
  padding-left: 0.3%;
  padding-right: 0.3%;
`

const StlyedP = styled.p`
  color: white;
  padding-left: 0.3%;
`

export default function Header() {
  return (
    <StyledHeader>
      {/* header */}
      <StlyedH1>MENSUN WANG</StlyedH1>
      <StlyedP>
        Queens, NY · (718) 224-1998 · mensun@bu.edu
      </StlyedP>
    </StyledHeader>
  )
}