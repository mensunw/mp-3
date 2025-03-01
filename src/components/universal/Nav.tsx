import { Link } from "react-router"
import styled from 'styled-components';

export default function Nav() {
  return (
    <nav>
      <img src="/profile.jpg" alt="photo of Mensun Wang" id="pfp" />
      <ul>
        <Link to="/">
          <li>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            Home
          </li>
        </Link>
        <Link to="/education">
          <li>
            Education
          </li>
        </Link>
        <Link to="/skills">
          <li>
            Skills
          </li>
        </Link>
        <Link to="/experience">
          <li>
            Experience
          </li>
        </Link>
        <Link to="/projects">
          <li>
            Projects
          </li>
        </Link>
        <Link to="/interests">
          <li>
            Interests
          </li>
        </Link>
      </ul>
    </nav>
  )
}