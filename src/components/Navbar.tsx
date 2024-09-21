import "../assets/styles/NavBar.scss"
import logomark from "../assets/images/Logomark.png";
import logotype from "../assets/images/Logotype.png";

const NavBar = () => {
  const user = "Marcus";
  const data = "Segunda, 23 de Septembro de 2024";
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li className="logos">
            <img src={logomark.src} alt="logo" />
            <img src={logotype.src} alt="logotype" />
          </li>
          <li className="title">Bem-vido de volta, {user}</li>
          <li className="data">{data}</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
