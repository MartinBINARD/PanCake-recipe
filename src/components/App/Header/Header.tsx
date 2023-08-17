import './Header.scss';

interface HeaderProps {
  thumbnail: string;
  title: string;
  author: string;
  difficulty: string;
}

// type HeaderProps = {
//   thumbnail: string;
//   title: string;
//   author: string;
//   difficulty: string;
// };

// Le plus souvent, on destructure les props directement
// dans les paramètres de la fonction Composant
function Header({ thumbnail, title, author, difficulty }: HeaderProps) {
  return (
    <header className="header">
      <img className="header-image" src={thumbnail} alt={title} />

      <div className="header-content">
        <h1 className="header-content__title">{title}</h1>

        <p className="header-content__infos">
          {author} – {difficulty}
        </p>
      </div>
    </header>
  );
}

export default Header;
