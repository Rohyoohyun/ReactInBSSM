import './style.css';

export default function Header() {
  const today = new Date();
  const Dates = today.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="header-container">
      <div className="header-title">오늘은 📅</div>
      <h1 className="header-date">{Dates}</h1>
    </div>
  );
}
