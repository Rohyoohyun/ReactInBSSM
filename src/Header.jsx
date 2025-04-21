const Header = ({ today }) => {
    return (
      <header className="header">
        <h3>오늘은 📅</h3>
        <h1>{today.toDateString()}</h1>
      </header>
    );
  };
  
  export default Header;  