import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/Transactions.css'

const Transactions = () => {
  const [selectedFilter, setSelectedFilter] = useState('Все')
  const [selectedPeriod, setSelectedPeriod] = useState('Этот месяц')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('list') // list or grid

  // Фейковые данные для транзакций
  const filterOptions = ['Все', 'Доход', 'Расход', 'Перевод']
  const periodOptions = ['Сегодня', 'Вчера', 'Эта неделя', 'Этот месяц', 'Прошлый месяц', 'Весь период']

  const transactions = [
    {
      id: 1,
      type: 'income',
      category: 'Зарплата',
      description: 'Ежемесячная заработная плата',
      amount: 85000.00,
      date: '2025-01-01',
      time: '09:00',
      status: 'completed',
      paymentMethod: 'Банковский перевод',
      recipient: 'ООО "Компания"',
      icon: '💼',
      color: '#9ef01a'
    },
    {
      id: 2,
      type: 'expense',
      category: 'Продукты',
      description: 'Покупка в Пятёрочке',
      amount: 3245.50,
      date: '2025-01-02',
      time: '18:30',
      status: 'completed',
      paymentMethod: 'Дебетовая карта',
      recipient: 'Пятёрочка',
      icon: '🛒',
      color: '#ff6348'
    },
    {
      id: 3,
      type: 'expense',
      category: 'Транспорт',
      description: 'Яндекс Такси',
      amount: 450.00,
      date: '2025-01-02',
      time: '20:15',
      status: 'completed',
      paymentMethod: 'Кредитная карта',
      recipient: 'Яндекс',
      icon: '🚕',
      color: '#ffa502'
    },
    {
      id: 4,
      type: 'income',
      category: 'Фриланс',
      description: 'Оплата за веб-разработку',
      amount: 25000.00,
      date: '2025-01-03',
      time: '14:20',
      status: 'completed',
      paymentMethod: 'PayPal',
      recipient: 'Клиент из США',
      icon: '💻',
      color: '#9ef01a'
    },
    {
      id: 5,
      type: 'expense',
      category: 'Развлечения',
      description: 'Билеты в кино',
      amount: 1200.00,
      date: '2025-01-03',
      time: '19:00',
      status: 'completed',
      paymentMethod: 'Дебетовая карта',
      recipient: 'Каро Фильм',
      icon: '🎬',
      color: '#e84393'
    },
    {
      id: 6,
      type: 'expense',
      category: 'Кафе и рестораны',
      description: 'Обед в ресторане',
      amount: 2800.00,
      date: '2025-01-04',
      time: '13:45',
      status: 'completed',
      paymentMethod: 'Кредитная карта',
      recipient: 'Тануки',
      icon: '🍜',
      color: '#fd79a8'
    },
    {
      id: 7,
      type: 'transfer',
      category: 'Перевод',
      description: 'Перевод маме',
      amount: 5000.00,
      date: '2025-01-04',
      time: '16:30',
      status: 'completed',
      paymentMethod: 'СБП',
      recipient: 'Мария Иванова',
      icon: '💸',
      color: '#54a0ff'
    },
    {
      id: 8,
      type: 'expense',
      category: 'Одежда',
      description: 'Покупка в Zara',
      amount: 8500.00,
      date: '2025-01-05',
      time: '15:20',
      status: 'completed',
      paymentMethod: 'Дебетовая карта',
      recipient: 'Zara',
      icon: '👕',
      color: '#a29bfe'
    },
    {
      id: 9,
      type: 'income',
      category: 'Возврат',
      description: 'Возврат за отменённый заказ',
      amount: 1500.00,
      date: '2025-01-05',
      time: '12:00',
      status: 'completed',
      paymentMethod: 'Банковский перевод',
      recipient: 'Wildberries',
      icon: '↩️',
      color: '#9ef01a'
    },
    {
      id: 10,
      type: 'expense',
      category: 'Аптека',
      description: 'Лекарства',
      amount: 850.00,
      date: '2025-01-06',
      time: '10:30',
      status: 'completed',
      paymentMethod: 'Наличные',
      recipient: 'Аптека 36.6',
      icon: '💊',
      color: '#00b894'
    },
    {
      id: 11,
      type: 'expense',
      category: 'Бензин',
      description: 'Заправка автомобиля',
      amount: 3200.00,
      date: '2025-01-06',
      time: '17:45',
      status: 'completed',
      paymentMethod: 'Дебетовая карта',
      recipient: 'Роснефть',
      icon: '⛽',
      color: '#fdcb6e'
    },
    {
      id: 12,
      type: 'expense',
      category: 'Подписки',
      description: 'Spotify Premium',
      amount: 299.00,
      date: '2025-01-07',
      time: '08:00',
      status: 'pending',
      paymentMethod: 'Автоплатеж',
      recipient: 'Spotify',
      icon: '🎵',
      color: '#1db954'
    },
    {
      id: 13,
      type: 'income',
      category: 'Инвестиции',
      description: 'Дивиденды по акциям',
      amount: 4200.00,
      date: '2025-01-07',
      time: '11:00',
      status: 'completed',
      paymentMethod: 'Брокерский счёт',
      recipient: 'Сбер Инвестиции',
      icon: '📈',
      color: '#9ef01a'
    },
    {
      id: 14,
      type: 'expense',
      category: 'Спорт',
      description: 'Абонемент в спортзал',
      amount: 4500.00,
      date: '2025-01-08',
      time: '07:30',
      status: 'completed',
      paymentMethod: 'Дебетовая карта',
      recipient: 'World Class',
      icon: '🏋️',
      color: '#6c5ce7'
    },
    {
      id: 15,
      type: 'expense',
      category: 'Коммунальные услуги',
      description: 'Оплата электричества',
      amount: 2450.00,
      date: '2025-01-08',
      time: '14:00',
      status: 'completed',
      paymentMethod: 'Онлайн-банкинг',
      recipient: 'Мосэнергосбыт',
      icon: '⚡',
      color: '#f39c12'
    }
  ]

  // Статистика
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalTransfers = transactions
    .filter(t => t.type === 'transfer')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  // Фильтрация
  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = 
      selectedFilter === 'Все' ||
      (selectedFilter === 'Доход' && transaction.type === 'income') ||
      (selectedFilter === 'Расход' && transaction.type === 'expense') ||
      (selectedFilter === 'Перевод' && transaction.type === 'transfer')

    const matchesSearch = 
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const getTypeInfo = (type) => {
    switch(type) {
      case 'income':
        return { label: 'Доход', class: 'income', sign: '+' }
      case 'expense':
        return { label: 'Расход', class: 'expense', sign: '-' }
      case 'transfer':
        return { label: 'Перевод', class: 'transfer', sign: '→' }
      default:
        return { label: 'Неизвестно', class: '', sign: '' }
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Сегодня'
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Вчера'
    } else {
      return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' })
    }
  }

  return (
    <div className="transactions-page">
      {/* Header */}
      <div className="transactions-header">
        <div className="header-content">
          <h1 className="page-title-main">Транзакции</h1>
          <p className="page-subtitle">История всех ваших операций и платежей</p>
        </div>
        <button className="add-transaction-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Добавить транзакцию
        </button>
      </div>

      {/* Statistics */}
      <div className="transaction-stats-grid">
        <div className="transaction-stat-card income-card">
          <div className="stat-icon-large">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 8V20M14 8L10 12M14 8L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-content-large">
            <span className="stat-label-large">Всего доходов</span>
            <span className="stat-value-large income-value">+₽{totalIncome.toLocaleString('ru-RU')}</span>
            <span className="stat-count">{transactions.filter(t => t.type === 'income').length} операций</span>
          </div>
        </div>

        <div className="transaction-stat-card expense-card">
          <div className="stat-icon-large">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 20V8M14 20L10 16M14 20L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-content-large">
            <span className="stat-label-large">Всего расходов</span>
            <span className="stat-value-large expense-value">-₽{totalExpense.toLocaleString('ru-RU')}</span>
            <span className="stat-count">{transactions.filter(t => t.type === 'expense').length} операций</span>
          </div>
        </div>

        <div className="transaction-stat-card balance-card">
          <div className="stat-icon-large">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 14H24M14 4V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-content-large">
            <span className="stat-label-large">Баланс</span>
            <span className={`stat-value-large ${balance >= 0 ? 'income-value' : 'expense-value'}`}>
              {balance >= 0 ? '+' : ''}₽{balance.toLocaleString('ru-RU')}
            </span>
            <span className="stat-count">За выбранный период</span>
          </div>
        </div>

        <div className="transaction-stat-card total-card">
          <div className="stat-icon-large">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 11H24M11 4V11M17 4V11" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content-large">
            <span className="stat-label-large">Всего операций</span>
            <span className="stat-value-large">{transactions.length}</span>
            <span className="stat-count">За весь период</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="transactions-controls">
        <div className="left-controls">
          <div className="filter-tabs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="period-dropdown">
            <select 
              value={selectedPeriod} 
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="period-select"
            >
              {periodOptions.map(period => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="right-controls">
          <div className="search-box-trans">
            <Icons.Search />
            <input
              type="text"
              placeholder="Поиск транзакций..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="Список"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Сетка"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          <button className="export-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 13V3M10 3L6 7M10 3L14 7M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Transactions List/Grid */}
      <div className={`transactions-container ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
        {filteredTransactions.map((transaction, index) => {
          const typeInfo = getTypeInfo(transaction.type)
          
          return (
            <div 
              key={transaction.id} 
              className={`transaction-item ${viewMode}`}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="transaction-icon-wrapper">
                <div 
                  className="transaction-icon" 
                  style={{ background: transaction.color + '20', color: transaction.color }}
                >
                  <span>{transaction.icon}</span>
                </div>
              </div>

              <div className="transaction-details">
                <div className="transaction-main">
                  <h3 className="transaction-title">{transaction.description}</h3>
                  <span className="transaction-category">{transaction.category}</span>
                </div>

                <div className="transaction-meta">
                  <span className="transaction-date">{formatDate(transaction.date)}</span>
                  <span className="transaction-time">{transaction.time}</span>
                  <span className="transaction-method">{transaction.paymentMethod}</span>
                </div>

                <div className="transaction-recipient">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1V7M7 7H13M7 7L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{transaction.recipient}</span>
                </div>
              </div>

              <div className="transaction-amount-section">
                <span className={`transaction-amount ${typeInfo.class}`}>
                  {typeInfo.sign}₽{transaction.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
                </span>
                <span className={`transaction-type-badge ${typeInfo.class}`}>
                  {typeInfo.label}
                </span>
              </div>

              <button className="transaction-menu">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="5" r="1.5" fill="currentColor"/>
                  <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                  <circle cx="10" cy="15" r="1.5" fill="currentColor"/>
                </svg>
              </button>
            </div>
          )
        })}
      </div>

      {filteredTransactions.length === 0 && (
        <div className="no-transactions">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
            <path d="M32 20V32M32 44H32.02" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <h3>Транзакции не найдены</h3>
          <p>Попробуйте изменить фильтры или поисковый запрос</p>
        </div>
      )}
    </div>
  )
}

export default Transactions
