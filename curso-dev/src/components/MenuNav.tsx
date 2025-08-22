const menuNav = () => {
  // This component renders a navigation menu with links to different sections of the site.
  return (
    <>
      <div className="ConteinerMenu">
        <a className="IconLogo" href="#">
          Iphone
        </a>
        <nav className="Menu">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </>
  );
};
export default menuNav;
