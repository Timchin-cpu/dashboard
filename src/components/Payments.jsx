import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/Payments.css'

const Payments = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [searchQuery, setSearchQuery] = useState('')

  // Фейковые данные для платежей
  const paymentCategories = ['Все', 'Коммунальные услуги', 'Интернет', 'Телефон', 'Подписки', 'Страхование']
  
  const payments = [
    {
      id: 1,
      name: 'Электроэнергия',
      provider: 'Мосэнергосбыт',
      category: 'Коммунальные услуги',
      amount: 2450.00,
      dueDate: '2025-01-15',
      status: 'pending',
      accountNumber: '5432-1098-7654',
      icon: '⚡',
      color: '#ffa502'
    },
    {
      id: 2,
      name: 'Интернет и ТВ',
      provider: 'Ростелеком',
      category: 'Интернет',
      amount: 890.00,
      dueDate: '2025-01-10',
      status: 'paid',
      accountNumber: '9876-5432-1098',
      icon: '📡',
      color: '#00d2d3'
    },
    {
      id: 3,
      name: 'Мобильная связь',
      provider: 'МегаФон',
      category: 'Телефон',
      amount: 550.00,
      dueDate: '2025-01-05',
      status: 'paid',
      accountNumber: '7890-1234-5678',
      icon: '📱',
      color: '#5f27cd'
    },
    {
      id: 4,
      name: 'Газоснабжение',
      provider: 'Мосгаз',
      category: 'Коммунальные услуги',
      amount: 1320.00,
      dueDate: '2025-01-20',
      status: 'pending',
      accountNumber: '4321-8765-4321',
      icon: '🔥',
      color: '#ff6348'
    },
    {
      id: 5,
      name: 'Водоснабжение',
      provider: 'Мосводоканал',
      category: 'Коммунальные услуги',
      amount: 980.00,
      dueDate: '2025-01-12',
      status: 'pending',
      accountNumber: '1234-5678-9012',
      icon: '💧',
      color: '#54a0ff'
    },
    {
      id: 6,
      name: 'Spotify Premium',
      provider: 'Spotify',
      category: 'Подписки',
      amount: 299.00,
      dueDate: '2025-01-08',
      status: 'paid',
      accountNumber: '3456-7890-1234',
      icon: '🎵',
      color: '#1db954'
    },
    {
      id: 7,
      name: 'Netflix',
      provider: 'Netflix',
      category: 'Подписки',
      amount: 799.00,
      dueDate: '2025-01-18',
      status: 'scheduled',
      accountNumber: '6789-0123-4567',
      icon: '🎬',
      color: '#e50914'
    },
    {
      id: 8,
      name: 'Автострахование',
      provider: 'РЕСО-Гарантия',
      category: 'Страхование',
      amount: 15800.00,
      dueDate: '2025-02-01',
      status: 'upcoming',
      accountNumber: '8901-2345-6789',
      icon: '🚗',
      color: '#ff9ff3'
    }
  ]

  const statistics = {
    totalPending: payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0),
    totalPaid: payments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0),
    upcomingPayments: payments.filter(p => p.status === 'upcoming' || p.status === 'scheduled').length,
    totalPayments: payments.length
  }

  const getStatusInfo = (status) => {
    switch(status) {
      case 'paid':
        return { label: 'Оплачен', class: 'paid' }
      case 'pending':
        return { label: 'Ожидает оплаты', class: 'pending' }
      case 'scheduled':
        return { label: 'Запланирован', class: 'scheduled' }
      case 'upcoming':
        return { label: 'Предстоящий', class: 'upcoming' }
      default:
        return { label: 'Неизвестно', class: '' }
    }
  }

  const filteredPayments = payments.filter(payment => {
    const matchesCategory = selectedCategory === 'Все' || payment.category === selectedCategory
    const matchesSearch = payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          payment.provider.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })
  }

  return (
    <div className="payments-page">
      {/* Header Section */}
      <div className="payments-header">
        <div className="header-content">
          <h1 className="page-title-main">Платежи</h1>
          <p className="page-subtitle">Управляйте всеми вашими счетами и подписками</p>
        </div>
        <button className="add-payment-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Добавить платеж
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="payment-stats-grid">
        <div className="payment-stat-card">
          <div className="stat-icon pending-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">К оплате</span>
            <span className="stat-value">₽{statistics.totalPending.toLocaleString('ru-RU')}</span>
          </div>
        </div>

        <div className="payment-stat-card">
          <div className="stat-icon paid-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">Оплачено</span>
            <span className="stat-value">₽{statistics.totalPaid.toLocaleString('ru-RU')}</span>
          </div>
        </div>

        <div className="payment-stat-card">
          <div className="stat-icon upcoming-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 10H21M7 3V6M17 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">Предстоящие</span>
            <span className="stat-value">{statistics.upcomingPayments}</span>
          </div>
        </div>

        <div className="payment-stat-card">
          <div className="stat-icon total-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">Всего счетов</span>
            <span className="stat-value">{statistics.totalPayments}</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="payments-filters">
        <div className="category-filters">
          {paymentCategories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="search-filter">
          <Icons.Search />
          <input
            type="text"
            placeholder="Поиск платежа..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Payments Grid */}
      <div className="payments-grid">
        {filteredPayments.map((payment, index) => (
          <div 
            key={payment.id} 
            className="payment-card"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="payment-card-header">
              <div className="payment-icon" style={{ background: payment.color }}>
                <span>{payment.icon}</span>
              </div>
              <div className="payment-info">
                <h3 className="payment-name">{payment.name}</h3>
                <p className="payment-provider">{payment.provider}</p>
              </div>
              <button className="payment-menu-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="5" r="1.5" fill="currentColor"/>
                  <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                  <circle cx="10" cy="15" r="1.5" fill="currentColor"/>
                </svg>
              </button>
            </div>

            <div className="payment-card-body">
              <div className="payment-detail">
                <span className="detail-label">Номер счета</span>
                <span className="detail-value">{payment.accountNumber}</span>
              </div>
              
              <div className="payment-detail">
                <span className="detail-label">Дата оплаты</span>
                <span className="detail-value">{formatDate(payment.dueDate)}</span>
              </div>

              <div className="payment-amount-row">
                <span className="amount-label">Сумма</span>
                <span className="amount-value">₽{payment.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div className="payment-card-footer">
              <span className={`payment-status ${getStatusInfo(payment.status).class}`}>
                {getStatusInfo(payment.status).label}
              </span>
              {payment.status === 'pending' && (
                <button className="pay-now-btn">
                  Оплатить
                </button>
              )}
              {payment.status === 'paid' && (
                <button className="view-receipt-btn">
                  Квитанция
                </button>
              )}
              {(payment.status === 'scheduled' || payment.status === 'upcoming') && (
                <button className="schedule-btn">
                  Настроить
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredPayments.length === 0 && (
        <div className="no-payments">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
            <path d="M32 20V32M32 44H32.02" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <h3>Платежи не найдены</h3>
          <p>Попробуйте изменить фильтры или поисковый запрос</p>
        </div>
      )}
    </div>
  )
}

export default Payments
