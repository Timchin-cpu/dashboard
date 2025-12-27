import { Icons } from './Icons'
import '../styles/Header.css'
import UserProfile from './UserProfile'

const Header = ({ onMenuClick, userName }) => {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onMenuClick}>
        <Icons.Menu />
      </button>
      
      <h1 className="page-title">Dashboard</h1>
      
      <div className="header-actions">
        <div className="search-box">
          <Icons.Search />
          <input type="text" placeholder="Поиск" />
        </div>
        
        <button className="icon-button">
          <Icons.Bell />
          <span className="notification-badge">3</span>
        </button>
        
        <UserProfile userName={userName} />

      </div>
    </header>
  )
}

export default Header
