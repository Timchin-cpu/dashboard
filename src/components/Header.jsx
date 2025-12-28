import { Icons } from './Icons'
import '../styles/Header.css'
import UserProfile from './UserProfile'
import Notifications from './Notifications'
import {  useEffect } from 'react'

const Header = ({ onMenuClick, userName }) => {
  useEffect(() => {
  window.scrollTo(0, 0);
});
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
        
   <Notifications />

        
        <UserProfile userName={userName} />

      </div>
    </header>
  )
}

export default Header
