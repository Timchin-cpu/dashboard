import { useState, useRef, useEffect } from 'react'
import { Icons } from './Icons'
import '../styles/Notifications.css'

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'payment',
      title: 'Новый платёж',
      message: 'Получен платёж 25,000₽ от ООО "Технологии"',
      time: '2 минуты назад',
      read: false,
      icon: '💰',
      color: '#43e97b'
    },
    {
      id: 2,
      type: 'transaction',
      title: 'Списание со счёта',
      message: 'Оплата Netflix - 799₽',
      time: '1 час назад',
      read: false,
      icon: '💳',
      color: '#ff4757'
    },
    {
      id: 3,
      type: 'goal',
      title: 'Цель достигнута!',
      message: 'Поздравляем! Вы достигли цели "MacBook Pro"',
      time: '3 часа назад',
      read: false,
      icon: '🎉',
      color: '#ffa502'
    },
    {
      id: 4,
      type: 'investment',
      title: 'Рост инвестиций',
      message: 'Ваш портфель вырос на 12,400₽ (+0.44%)',
      time: '5 часов назад',
      read: true,
      icon: '📈',
      color: '#00b894'
    },
    {
      id: 5,
      type: 'card',
      title: 'Новая транзакция',
      message: 'Покупка в Пятёрочка - 2,450₽',
      time: '6 часов назад',
      read: true,
      icon: '🛒',
      color: '#667eea'
    },
    {
      id: 6,
      type: 'security',
      title: 'Вход в аккаунт',
      message: 'Новый вход с устройства iPhone 15 Pro',
      time: 'Вчера',
      read: true,
      icon: '🔐',
      color: '#f39c12'
    },
    {
      id: 7,
      type: 'savings',
      title: 'Автопополнение',
      message: 'План "Отпуск": +25,000₽',
      time: 'Вчера',
      read: true,
      icon: '🏝️',
      color: '#54a0ff'
    },
    {
      id: 8,
      type: 'bill',
      title: 'Новый счёт',
      message: 'Счёт INV-2025-009 на сумму 150,000₽',
      time: '2 дня назад',
      read: true,
      icon: '📄',
      color: '#a29bfe'
    }
  ])

  const dropdownRef = useRef(null)

  const unreadCount = notifications.filter(n => !n.read).length

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id)
    
    // Здесь можно добавить навигацию в зависимости от типа
    switch(notification.type) {
      case 'payment':
        console.log('Navigate to payments')
        break
      case 'transaction':
        console.log('Navigate to transactions')
        break
      case 'goal':
        console.log('Navigate to saving plans')
        break
      case 'investment':
        console.log('Navigate to investments')
        break
      default:
        break
    }
    
    setIsOpen(false)
  }

  return (
    <div className="notifications-container" ref={dropdownRef}>
      <button 
        className={`icon-button notification-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icons.Bell />
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notifications-dropdown">
          {/* Header */}
          <div className="notifications-header">
            <div className="header-title-section">
              <h3 className="notifications-title">Уведомления</h3>
              {unreadCount > 0 && (
                <span className="unread-count">{unreadCount} новых</span>
              )}
            </div>
            {notifications.length > 0 && (
              <div className="header-actions">
                {unreadCount > 0 && (
                  <button className="action-btn" onClick={markAllAsRead} style={{width:'124px'}}>
                    Прочитать все
                  </button>
                )}
                <button className="action-btn danger" onClick={clearAll} style={{width:'124px'}}>
                  Очистить
                </button>
              </div>
            )}
          </div>

          {/* Notifications List */}
          <div className="notifications-list">
            {notifications.length === 0 ? (
              <div className="empty-notifications">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                  <path d="M28 20C28 17.7909 29.7909 16 32 16C34.2091 16 36 17.7909 36 20V32C36 34.2091 34.2091 36 32 36C29.7909 36 28 34.2091 28 32V20Z" fill="currentColor" opacity="0.3"/>
                  <circle cx="32" cy="42" r="2" fill="currentColor" opacity="0.3"/>
                  <path d="M20 34L24 38M44 34L40 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                </svg>
                <h4>Нет уведомлений</h4>
                <p>Все уведомления будут появляться здесь</p>
              </div>
            ) : (
              <>
                {/* Unread Notifications */}
                {notifications.filter(n => !n.read).length > 0 && (
                  <div className="notification-section">
                    <div className="section-label">Новые</div>
                    {notifications
                      .filter(n => !n.read)
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className="notification-item unread"
                          onClick={() => handleNotificationClick(notification)}
                        >
                          <div 
                            className="notification-icon" 
                            style={{ background: notification.color + '20', color: notification.color }}
                          >
                            <span className="icon-emoji">{notification.icon}</span>
                          </div>
                          <div className="notification-content">
                            <h4 className="notification-title">{notification.title}</h4>
                            <p className="notification-message">{notification.message}</p>
                            <span className="notification-time">{notification.time}</span>
                          </div>
                          <button
                            className="delete-btn"
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteNotification(notification.id)
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <div className="unread-indicator"></div>
                        </div>
                      ))}
                  </div>
                )}

                {/* Read Notifications */}
                {notifications.filter(n => n.read).length > 0 && (
                  <div className="notification-section">
                    <div className="section-label">Ранее</div>
                    {notifications
                      .filter(n => n.read)
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className="notification-item"
                          onClick={() => handleNotificationClick(notification)}
                        >
                          <div 
                            className="notification-icon" 
                            style={{ background: notification.color + '20', color: notification.color }}
                          >
                            <span className="icon-emoji">{notification.icon}</span>
                          </div>
                          <div className="notification-content">
                            <h4 className="notification-title">{notification.title}</h4>
                            <p className="notification-message">{notification.message}</p>
                            <span className="notification-time">{notification.time}</span>
                          </div>
                          <button
                            className="delete-btn"
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteNotification(notification.id)
                            }}
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="notifications-footer">
              <button className="view-all-btn">
                Посмотреть все уведомления
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Notifications
