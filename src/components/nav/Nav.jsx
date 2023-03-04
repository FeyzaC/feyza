import { Link } from "react-router-dom";
import { Div, Links } from "./Nav.styled";

const Nav = () => {
  return (
    <Div>
      <ul>
        <Links to="/">Home</Links>
        <Links to="/people">People</Links>
        <Links to="/contact">Contact</Links>
        <Links to="/login">Login</Links>
      </ul>
    </Div>
  );
};

export default Nav;
