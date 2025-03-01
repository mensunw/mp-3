import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: calc(30px + 2vw);
  color: #343a40;
  font-family: 'Saira Extra Condensed', Serif;
  font-weight: 700;
  text-transform: uppercase;
`

export default function Interests() {
  return (
    <>
      {/* interests */}
      <StyledH2> Interests </StyledH2>
      <p>
        Apart from being a student, I enjoy hanging out with others, cracking puzzles, and creating real-world impact
        applications. I also indulge in several
        sports such as ping pong and badminton, and believe in maintaining an active lifestyle through regular gym
        workouts
      </p>
      <p>
        When indoors, I love following various Asian cultures such as Anime, K-pop, and Chinese-cooking,
        and also take some interest in Strategic and MMORPG games
      </p>
      {/* adding this to handle spacing as well */}
      <p>
        The full list of games I play ordered by playtime include, but does exclude, Minecraft (unsurprisingly, I might add), Teamfight Tactics, League of Legends, Valorant, Marvel Rivals, Chess, Pokemon TCG, and Clash of Clans
      </p>
    </>
  )
}