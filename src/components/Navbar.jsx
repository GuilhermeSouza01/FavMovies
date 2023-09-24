import Logo from "./Logo";

/* eslint-disable react/prop-types */
const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo /> {children}
    </nav>
  );
};

export default NavBar;
