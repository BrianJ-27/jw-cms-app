import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";
import { PersonBoard } from "@styled-icons/fluentui-system-filled/PersonBoard";
import { AddToList } from "@styled-icons/entypo/AddToList";
import { Location } from "@styled-icons/entypo/Location";
import { LogoutCircle } from "@styled-icons/remix-line/LogoutCircle";
import { NavWrapper } from "../Nav.styles";
import { Link } from "react-router-dom";

const NavLinkContainer = ({ currentUser, loggedOut }) => {
  return (
    <NavWrapper className="flex__container--between">
      <li className="flex__container--v-start">
        <Link
          className="nav__link flex__container--column-v-center"
          to="/dashboard"
        >
          <Dashboard className="nav__icon" />
          <span className="title"> Dashboard</span>
        </Link>
      </li>

      <li className="flex__container--v-start">
        <Link
          className="nav__link flex__container--column-v-center"
          to="/publishers"
        >
          <PersonBoard className="nav__icon" />
          <span className="title">Publishers</span>
        </Link>
      </li>

      <li className="flex__container--v-start">
        <Link
          className="nav__link--active flex__container--column-v-center"
          to="/addshift"
        >
          <AddToList className="nav__icon" />
          <span className="title">Add Shift</span>
        </Link>
      </li>

      <li className="flex__container--v-start">
        <Link
          className="nav__link flex__container--column-v-center"
          to="/cartlocation"
        >
          <Location className="nav__icon" />
          <span className="title">Cart Locations</span>
        </Link>
      </li>
      {currentUser ? (
        <li className="flex__container--v-start">
          <Link to="/" className="nav__link flex__container--column-v-center">
            <LogoutCircle className="nav__icon" />
            <span className="title">Log Out</span>
          </Link>
        </li>
      ) : (
        <li className="flex__container--v-start" onClick={loggedOut}>
          <Link to="/" className="nav__link flex__container--column-v-center">
            <LogoutCircle className="nav__icon" />
            <span className="title">Log Out</span>
          </Link>
        </li>
      )}
      {console.log(currentUser)}
    </NavWrapper>
  );
};

export default NavLinkContainer;
