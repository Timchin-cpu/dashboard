import { useState, useRef, useEffect } from 'react'
import '../styles/UserProfile.css'

const UserProfile = ({ userName = 'Иван Петров' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Фейковые данные пользователя
  const userData = {
    name: 'Иван Петров',
    email: 'ivan.petrov@example.com',
    phone: '+7 (999) 123-45-67',
    avatar: null, // null = показываем инициалы
    role: 'Premium',
    balance: 2845600,
    lastLogin: '2025-01-27 14:32',
    notifications: 3,
    settings: {
      theme: 'dark',
      language: 'Русский',
      currency: '₽',
      notifications: true
    }
  }

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const menuItems = [
    {
      id: 1,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 18C4 14.6863 6.68629 12 10 12C13.3137 12 16 14.6863 16 18" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      label: 'Мой профиль',
      action: 'profile'
    },
    {
      id: 2,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L2 7L10 12L18 7L10 2Z" fill="currentColor"/>
          <path d="M2 13L10 18L18 13" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      label: 'Баланс и счета',
      action: 'balance',
      badge: `₽${userData.balance.toLocaleString('ru-RU')}`
    },
    {
      id: 3,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: 'История активности',
      action: 'activity'
    },
    {
      id: 4,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3C6 3 3 10 3 10C3 10 6 17 10 17C14 17 17 10 17 10C17 10 14 3 10 3Z" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      label: 'Безопасность',
      action: 'security'
    },
    {
      id: 5,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 12L12 8M12 12L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="6" r="4" fill="var(--danger)"/>
        </svg>
      ),
      label: 'Уведомления',
      action: 'notifications',
      badge: userData.notifications > 0 ? userData.notifications : null
    },
    {
      id: 6,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 2V4M10 16V18M18 10H16M4 10H2M15.5 15.5L14 14M6 6L4.5 4.5M15.5 4.5L14 6M6 14L4.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Настройки',
      action: 'settings'
    },
    {
      id: 7,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 7V10M10 13H10.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Помощь и поддержка',
      action: 'help'
    },
    {
      id: 8,
      divider: true
    },
    {
      id: 9,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 17L3 17L3 3L7 3M13 13L17 10L13 7M17 10L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: 'Выйти',
      action: 'logout',
      danger: true
    }
  ]

  const handleMenuClick = (action) => {
    console.log(`Action: ${action}`)
    setIsDropdownOpen(false)
    
    // Здесь можно добавить навигацию или другие действия
    switch(action) {
      case 'profile':
        // Открыть профиль
        break
      case 'balance':
        // Открыть баланс
        break
      case 'settings':
        // Открыть настройки
        break
      case 'logout':
        // Выход из системы
        alert('Выход из системы')
        break
      default:
        break
    }
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="user-profile-container" ref={dropdownRef}>
      <div 
        className={`user-profile ${isDropdownOpen ? 'active' : ''}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="user-avatar">
          {userData.avatar ? (
            <img src={userData.avatar} alt={userData.name} />
          ) : (
            <span className="avatar-initials">{getInitials(userData.name)}</span>
          )}
          {userData.notifications > 0 && (
            <div className="notification-dot">{userData.notifications}</div>
          )}
        </div>
        <div className="user-info">
          <span className="user-name">{userData.name}</span>
          <span className="user-role">{userData.role}</span>
        </div>
        <svg 
          className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none"
        >
          <path 
            d="M5 7.5L10 12.5L15 7.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isDropdownOpen && (
        <div className="profile-dropdown">
          {/* User Info Header */}
          <div className="dropdown-header">
            <div className="header-avatar">
              {userData.avatar ? (
                <img src={userData.avatar} alt={userData.name} />
              ) : (
                <span className="header-initials">{getInitials(userData.name)}</span>
              )}
            </div>
            <div className="header-info">
              <h3 className="header-name">{userData.name}</h3>
              <p className="header-email">{userData.email}</p>
              <div className="header-role-badge">{userData.role}</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="dropdown-stats">
            <div className="stat-item">
              <span className="stat-label">Баланс</span>
              <span className="stat-value">₽{userData.balance.toLocaleString('ru-RU')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-label">Последний вход</span>
              <span className="stat-value small">
                {new Date(userData.lastLogin).toLocaleDateString('ru-RU', {
                  day: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="dropdown-menu">
            {menuItems.map(item => {
              if (item.divider) {
                return <div key={item.id} className="menu-divider"></div>
              }

              return (
                <button
                  key={item.id}
                  className={`menu-item ${item.danger ? 'danger' : ''}`}
                  onClick={() => handleMenuClick(item.action)}
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                  {item.badge && (
                    <span className={`menu-badge ${typeof item.badge === 'number' ? 'number' : 'text'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile
