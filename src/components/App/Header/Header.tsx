import './Header.scss';

function Header({
  title = '' as string,
  author = '' as string,
  level = '' as string,
}) {
  return (
    <header className="header">
      <img
        className="header-image"
        src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Crêpes raffinées"
      />

      <div className="header-content">
        <h1 className="header-content__title">{title}</h1>
        <p className="header-content__infos">
          {author} - {level}
        </p>
      </div>
    </header>
  );
}

export default Header;
