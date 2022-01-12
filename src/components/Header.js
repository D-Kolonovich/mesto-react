import logoSvg from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
        <img
          src={logoSvg}
          alt="логотип"
          className="logo"
        />
      </header>
    )
}

export default Header