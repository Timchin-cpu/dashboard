import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/Cards.css'

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [showCardNumber, setShowCardNumber] = useState({})

  // Фейковые данные для карт
  const cards = [
    {
      id: 1,
      type: 'visa',
      cardNumber: '4532 1488 0343 6467',
      cardholderName: 'ИВАН ПЕТРОВ',
      expiryDate: '12/26',
      cvv: '739',
      balance: 125680.50,
      currency: '₽',
      isPrimary: true,
      isBlocked: false,
      cardColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      bankName: 'Сбербанк',
      cardType: 'Дебетовая',
      cashback: 1.5,
      limit: 500000
    },
    {
      id: 2,
      type: 'mastercard',
      cardNumber: '5425 2334 3010 9903',
      cardholderName: 'ИВАН ПЕТРОВ',
      expiryDate: '08/27',
      cvv: '482',
      balance: 89340.00,
      currency: '₽',
      isPrimary: false,
      isBlocked: false,
      cardColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      bankName: 'Тинькофф',
      cardType: 'Кредитная',
      cashback: 5.0,
      limit: 300000
    },
    {
      id: 3,
      type: 'mir',
      cardNumber: '2200 7007 1234 5678',
      cardholderName: 'ИВАН ПЕТРОВ',
      expiryDate: '03/28',
      cvv: '156',
      balance: 45200.75,
      currency: '₽',
      isPrimary: false,
      isBlocked: false,
      cardColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      bankName: 'Альфа-Банк',
      cardType: 'Дебетовая',
      cashback: 2.0,
      limit: 200000
    },
    {
      id: 4,
      type: 'visa',
      cardNumber: '4916 7890 1234 5678',
      cardholderName: 'ИВАН ПЕТРОВ',
      expiryDate: '11/25',
      cvv: '923',
      balance: 0.00,
      currency: '₽',
      isPrimary: false,
      isBlocked: true,
      cardColor: 'linear-gradient(135deg, #a8a8a8 0%, #6b6b6b 100%)',
      bankName: 'ВТБ',
      cardType: 'Дебетовая',
      cashback: 1.0,
      limit: 150000
    }
  ]

  const transactions = [
    {
      id: 1,
      cardId: 1,
      merchant: 'Пятёрочка',
      category: 'Продукты',
      amount: -2450.00,
      date: '2025-01-27',
      time: '14:32',
      icon: '🛒',
      status: 'completed'
    },
    {
      id: 2,
      cardId: 2,
      merchant: 'Яндекс Такси',
      category: 'Транспорт',
      amount: -680.00,
      date: '2025-01-27',
      time: '12:15',
      icon: '🚕',
      status: 'completed'
    },
    {
      id: 3,
      cardId: 1,
      merchant: 'Netflix',
      category: 'Подписки',
      amount: -799.00,
      date: '2025-01-26',
      time: '08:00',
      icon: '🎬',
      status: 'completed'
    },
    {
      id: 4,
      cardId: 3,
      merchant: 'Зарплата',
      category: 'Доход',
      amount: 85000.00,
      date: '2025-01-25',
      time: '09:00',
      icon: '💼',
      status: 'completed'
    },
    {
      id: 5,
      cardId: 2,
      merchant: 'Ozon',
      category: 'Покупки',
      amount: -4520.00,
      date: '2025-01-25',
      time: '16:45',
      icon: '📦',
      status: 'completed'
    }
  ]

  const cardBenefits = {
    1: [
      { name: 'Кэшбэк на всё', value: '1.5%' },
      { name: 'Бесплатное обслуживание', value: 'До 5 млн' },
      { name: 'Снятие без комиссии', value: '10 раз/мес' }
    ],
    2: [
      { name: 'Кэшбэк на всё', value: '5%' },
      { name: 'Льготный период', value: '55 дней' },
      { name: 'Cashback категории', value: 'До 30%' }
    ],
    3: [
      { name: 'Кэшбэк МИР', value: '2%' },
      { name: 'Поддержка СБП', value: '✓' },
      { name: 'Снятие наличных', value: 'Без комиссии' }
    ],
    4: [
      { name: 'Базовый кэшбэк', value: '1%' },
      { name: 'Обслуживание', value: '0₽/год' }
    ]
  }

  // Статистика
  const totalBalance = cards.filter(c => !c.isBlocked).reduce((sum, card) => sum + card.balance, 0)
  const activeCards = cards.filter(c => !c.isBlocked).length
  const blockedCards = cards.filter(c => c.isBlocked).length
  const totalCashback = cards.filter(c => !c.isBlocked).reduce((sum, card) => sum + (card.balance * (card.cashback / 100)), 0)

  const getCardLogo = (type) => {
    const logos = {
      visa: (
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
          <text x="0" y="15" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">VISA</text>
        </svg>
      ),
      mastercard: (
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
          <circle cx="15" cy="12" r="9" fill="#eb001b" opacity="0.8"/>
          <circle cx="25" cy="12" r="9" fill="#ff5f00" opacity="0.8"/>
        </svg>
      ),
      mir: (
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
          <text x="0" y="15" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">МИР</text>
        </svg>
      )
    }
    return logos[type] || null
  }

  const maskCardNumber = (number) => {
    const parts = number.split(' ')
    return `${parts[0]} •••• •••• ${parts[3]}`
  }

  const toggleCardNumber = (cardId) => {
    setShowCardNumber(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const getRecentTransactions = (cardId) => {
    return transactions.filter(t => t.cardId === cardId).slice(0, 3)
  }

  return (
    <div className="cards-page">
      {/* Header */}
      <div className="cards-header">
        <div className="header-content">
          <h1 className="page-title-main">Мои карты</h1>
          <p className="page-subtitle">Управление банковскими картами и счетами</p>
        </div>
        <button className="add-card-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Добавить карту
        </button>
      </div>

      {/* Statistics */}
      <div className="cards-stats-grid">
        <div className="card-stat-item">
          <div className="stat-icon-box balance-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-label-small">Общий баланс</span>
            <span className="stat-value-big">₽{totalBalance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="card-stat-item">
          <div className="stat-icon-box cards-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-label-small">Активные карты</span>
            <span className="stat-value-big">{activeCards}</span>
          </div>
        </div>

        <div className="card-stat-item">
          <div className="stat-icon-box cashback-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-label-small">Доступный кэшбэк</span>
            <span className="stat-value-big">₽{totalCashback.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="card-stat-item">
          <div className="stat-icon-box blocked-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-label-small">Заблокировано</span>
            <span className="stat-value-big">{blockedCards}</span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={card.id} className="card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Bank Card */}
            <div 
              className={`bank-card ${card.isBlocked ? 'blocked' : ''} ${selectedCard === card.id ? 'selected' : ''}`}
              style={{ background: card.cardColor }}
              onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
            >
              <div className="card-header-row">
                <div className="card-bank">{card.bankName}</div>
                <div className="card-type-badge">{card.cardType}</div>
              </div>

              <div className="card-chip">
                <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                  <rect x="5" y="5" width="40" height="30" rx="4" fill="url(#chipGradient)"/>
                  <rect x="12" y="12" width="8" height="8" fill="rgba(255,255,255,0.3)"/>
                  <rect x="22" y="12" width="8" height="8" fill="rgba(255,255,255,0.3)"/>
                  <rect x="32" y="12" width="8" height="8" fill="rgba(255,255,255,0.3)"/>
                  <rect x="12" y="22" width="8" height="8" fill="rgba(255,255,255,0.3)"/>
                  <rect x="22" y="22" width="8" height="8" fill="rgba(255,255,255,0.3)"/>
                  <rect x="32" y="22" width="8" height="8" fill="rgba(255,255,255,0.3)"/>
                  <defs>
                    <linearGradient id="chipGradient" x1="5" y1="5" x2="45" y2="35">
                      <stop stopColor="#FFD700"/>
                      <stop offset="1" stopColor="#FFA500"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="card-number-row">
                <span className="card-number">
                  {showCardNumber[card.id] ? card.cardNumber : maskCardNumber(card.cardNumber)}
                </span>
                <button 
                  className="toggle-number-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleCardNumber(card.id)
                  }}
                >
                  {showCardNumber[card.id] ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10C3 10 6 5 10 5C14 5 17 10 17 10C17 10 14 15 10 15C6 15 3 10 3 10Z" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 3L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10C3 10 6 5 10 5C14 5 17 10 17 10C17 10 14 15 10 15C6 15 3 10 3 10Z" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )}
                </button>
              </div>

              <div className="card-footer-row">
                <div className="card-info-group">
                  <span className="info-label">Владелец</span>
                  <span className="info-value">{card.cardholderName}</span>
                </div>
                <div className="card-info-group">
                  <span className="info-label">Срок</span>
                  <span className="info-value">{card.expiryDate}</span>
                </div>
                <div className="card-logo">
                  {getCardLogo(card.type)}
                </div>
              </div>

              {card.isPrimary && (
                <div className="primary-badge">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z" fill="currentColor"/>
                  </svg>
                  Основная
                </div>
              )}

              {card.isBlocked && (
                <div className="blocked-overlay">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2"/>
                    <path d="M10 10L22 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Заблокирована</span>
                </div>
              )}
            </div>

            {/* Card Details */}
            <div className="card-details">
              <div className="details-header">
                <div className="balance-info">
                  <span className="balance-label">Доступно</span>
                  <span className="balance-amount">
                    {card.currency}{card.balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="limit-info">Лимит: ₽{card.limit.toLocaleString('ru-RU')}</span>
                </div>
                <div className="cashback-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L9.5 5.5L14 7L9.5 8.5L8 14L6.5 8.5L2 7L6.5 5.5L8 1Z" fill="currentColor"/>
                  </svg>
                  {card.cashback}% кэшбэк
                </div>
              </div>

              <div className="benefits-list">
                {cardBenefits[card.id]?.map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <span className="benefit-name">{benefit.name}</span>
                    <span className="benefit-value">{benefit.value}</span>
                  </div>
                ))}
              </div>

              <div className="card-actions">
                <button className="card-action-btn primary-action">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3V15M3 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Пополнить
                </button>
                <button className="card-action-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L11 5M15 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Перевести
                </button>
                <button className="card-action-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 5V9L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  История
                </button>
                <button className="card-action-btn danger-action">
                  {card.isBlocked ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="7" y="8" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                        <path d="M6 8V6C6 4.34315 7.34315 3 9 3C10.6569 3 12 4.34315 12 6V8" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Разблокировать
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
                        <path d="M11 7L7 11M7 7L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Заблокировать
                    </>
                  )}
                </button>
              </div>

              {!card.isBlocked && getRecentTransactions(card.id).length > 0 && (
                <div className="recent-transactions">
                  <h4 className="transactions-title">Последние операции</h4>
                  <div className="transactions-list">
                    {getRecentTransactions(card.id).map(transaction => (
                      <div key={transaction.id} className="transaction-row">
                        <div className="transaction-icon-small">{transaction.icon}</div>
                        <div className="transaction-info-small">
                          <span className="merchant-name">{transaction.merchant}</span>
                          <span className="transaction-date-small">{transaction.time}</span>
                        </div>
                        <span className={`transaction-amount-small ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
