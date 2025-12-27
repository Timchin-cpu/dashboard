import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/SavingPlans.css'

const SavingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  // Фейковые данные для планов накопления
  const savingPlans = [
    {
      id: 1,
      name: 'Отпуск на Мальдивах',
      goal: 500000,
      current: 342500,
      targetDate: '2025-07-01',
      monthlyContribution: 25000,
      icon: '🏝️',
      color: '#4facfe',
      category: 'Путешествия',
      autoDeposit: true,
      interest: 5.5,
      daysLeft: 155
    },
    {
      id: 2,
      name: 'Новый MacBook Pro',
      goal: 250000,
      current: 198000,
      targetDate: '2025-03-15',
      monthlyContribution: 15000,
      icon: '💻',
      color: '#667eea',
      category: 'Техника',
      autoDeposit: true,
      interest: 4.0,
      daysLeft: 47
    },
    {
      id: 3,
      name: 'Первоначальный взнос на квартиру',
      goal: 2000000,
      current: 650000,
      targetDate: '2026-12-31',
      monthlyContribution: 50000,
      icon: '🏠',
      color: '#f093fb',
      category: 'Недвижимость',
      autoDeposit: true,
      interest: 7.0,
      daysLeft: 704
    },
    {
      id: 4,
      name: 'Свадьба',
      goal: 800000,
      current: 480000,
      targetDate: '2025-09-20',
      monthlyContribution: 40000,
      icon: '💍',
      color: '#f5576c',
      category: 'События',
      autoDeposit: false,
      interest: 6.0,
      daysLeft: 237
    },
    {
      id: 5,
      name: 'Новый автомобиль',
      goal: 1500000,
      current: 890000,
      targetDate: '2025-12-01',
      monthlyContribution: 60000,
      icon: '🚗',
      color: '#43e97b',
      category: 'Транспорт',
      autoDeposit: true,
      interest: 5.0,
      daysLeft: 308
    },
    {
      id: 6,
      name: 'Образование детей',
      goal: 3000000,
      current: 1200000,
      targetDate: '2028-09-01',
      monthlyContribution: 45000,
      icon: '🎓',
      color: '#ffa502',
      category: 'Образование',
      autoDeposit: true,
      interest: 8.0,
      daysLeft: 1344
    }
  ]

  const transactions = [
    { id: 1, planId: 1, amount: 25000, date: '2025-01-01', type: 'deposit', description: 'Автопополнение' },
    { id: 2, planId: 2, amount: 15000, date: '2025-01-01', type: 'deposit', description: 'Автопополнение' },
    { id: 3, planId: 1, amount: 10000, date: '2024-12-28', type: 'deposit', description: 'Ручное пополнение' },
    { id: 4, planId: 3, amount: 50000, date: '2024-12-25', type: 'deposit', description: 'Автопополнение' },
    { id: 5, planId: 4, amount: 40000, date: '2024-12-20', type: 'deposit', description: 'Пополнение' }
  ]

  // Статистика
  const totalGoal = savingPlans.reduce((sum, plan) => sum + plan.goal, 0)
  const totalSaved = savingPlans.reduce((sum, plan) => sum + plan.current, 0)
  const totalProgress = (totalSaved / totalGoal) * 100
  const activePlans = savingPlans.length
  const monthlyContributions = savingPlans.reduce((sum, plan) => sum + plan.monthlyContribution, 0)
  const completedPlans = savingPlans.filter(plan => plan.current >= plan.goal).length

  const getProgress = (current, goal) => {
    return Math.min((current / goal) * 100, 100)
  }

  const getTimeRemaining = (daysLeft) => {
    if (daysLeft <= 30) return 'Меньше месяца'
    if (daysLeft <= 90) return `${Math.ceil(daysLeft / 30)} месяца`
    const months = Math.ceil(daysLeft / 30)
    return `${months} ${months % 10 === 1 ? 'месяц' : months % 10 < 5 ? 'месяца' : 'месяцев'}`
  }

  const getStatusColor = (progress) => {
    if (progress >= 75) return '#43e97b'
    if (progress >= 50) return '#ffa502'
    return '#f5576c'
  }

  const getPlanTransactions = (planId) => {
    return transactions.filter(t => t.planId === planId).slice(0, 3)
  }

  const calculateProjectedDate = (plan) => {
    const remaining = plan.goal - plan.current
    const monthsNeeded = Math.ceil(remaining / plan.monthlyContribution)
    const projectedDate = new Date()
    projectedDate.setMonth(projectedDate.getMonth() + monthsNeeded)
    return projectedDate.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })
  }

  return (
    <div className="saving-plans-page">
      {/* Header */}
      <div className="plans-header">
        <div className="header-content">
          <h1 className="page-title-main">Планы накопления</h1>
          <p className="page-subtitle">Достигайте своих финансовых целей с умными накоплениями</p>
        </div>
        <button className="create-plan-btn" onClick={() => setShowCreateModal(true)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Создать план
        </button>
      </div>

      {/* Statistics */}
      <div className="plans-stats-grid">
        <div className="plan-stat-card total-card">
          <div className="stat-icon-circle">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 8V14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="stat-content-box">
            <span className="stat-label-text">Всего целей</span>
            <span className="stat-value-text">₽{totalGoal.toLocaleString('ru-RU')}</span>
            <div className="progress-indicator">
              <div className="progress-bar-mini">
                <div className="progress-fill-mini" style={{ width: `${totalProgress}%` }}></div>
              </div>
              <span className="progress-text">{totalProgress.toFixed(1)}% достигнуто</span>
            </div>
          </div>
        </div>

        <div className="plan-stat-card saved-card">
          <div className="stat-icon-circle">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4L4 9L14 14L24 9L14 4Z" fill="currentColor"/>
              <path d="M4 19L14 24L24 19" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 14L14 19L24 14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content-box">
            <span className="stat-label-text">Накоплено</span>
            <span className="stat-value-text saved-value">₽{totalSaved.toLocaleString('ru-RU')}</span>
            <span className="stat-subtext">Осталось ₽{(totalGoal - totalSaved).toLocaleString('ru-RU')}</span>
          </div>
        </div>

        <div className="plan-stat-card active-card">
          <div className="stat-icon-circle">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="6" y="8" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="10" cy="15" r="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="15" r="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M6 12H22" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content-box">
            <span className="stat-label-text">Активные планы</span>
            <span className="stat-value-text">{activePlans}</span>
            <span className="stat-subtext">Ежемесячно: ₽{monthlyContributions.toLocaleString('ru-RU')}</span>
          </div>
        </div>

        <div className="plan-stat-card completed-card">
          <div className="stat-icon-circle">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 14L12.5 17.5L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-content-box">
            <span className="stat-label-text">Завершено</span>
            <span className="stat-value-text">{completedPlans}</span>
            <span className="stat-subtext">из {activePlans} целей</span>
          </div>
        </div>
      </div>

      {/* Savings Plans Grid */}
      <div className="plans-grid">
        {savingPlans.map((plan, index) => {
          const progress = getProgress(plan.current, plan.goal)
          const remaining = plan.goal - plan.current
          const projectedDate = calculateProjectedDate(plan)
          const statusColor = getStatusColor(progress)
          const isCompleted = progress >= 100

          return (
            <div 
              key={plan.id} 
              className={`saving-plan-card ${isCompleted ? 'completed' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
            >
              {/* Card Header */}
              <div className="plan-card-header">
                <div 
                  className="plan-icon-large" 
                  style={{ background: plan.color + '20', color: plan.color }}
                >
                  <span>{plan.icon}</span>
                </div>
                <div className="plan-header-info">
                  <h3 className="plan-name">{plan.name}</h3>
                  <span className="plan-category">{plan.category}</span>
                </div>
                {plan.autoDeposit && (
                  <div className="auto-badge" title="Автопополнение включено">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Progress Section */}
              <div className="plan-progress-section">
                <div className="progress-header">
                  <div className="amount-info">
                    <span className="current-amount" style={{ color: statusColor }}>
                      ₽{plan.current.toLocaleString('ru-RU')}
                    </span>
                    <span className="goal-amount">из ₽{plan.goal.toLocaleString('ru-RU')}</span>
                  </div>
                  <span className="progress-percentage" style={{ color: statusColor }}>
                    {progress.toFixed(1)}%
                  </span>
                </div>

                <div className="progress-bar-large">
                  <div 
                    className="progress-fill-large" 
                    style={{ 
                      width: `${progress}%`,
                      background: statusColor 
                    }}
                  >
                    {progress >= 20 && (
                      <span className="progress-label-inside">
                        {progress.toFixed(0)}%
                      </span>
                    )}
                  </div>
                </div>

                {!isCompleted && (
                  <div className="remaining-info">
                    <span className="remaining-amount">
                      Осталось: ₽{remaining.toLocaleString('ru-RU')}
                    </span>
                    <span className="time-left">
                      {getTimeRemaining(plan.daysLeft)}
                    </span>
                  </div>
                )}

                {isCompleted && (
                  <div className="completed-badge-big">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.2"/>
                      <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Цель достигнута!
                  </div>
                )}
              </div>

              {/* Plan Details */}
              <div className="plan-details-section">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Срок</span>
                    <span className="detail-value">{formatDate(plan.targetDate)}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Процент</span>
                    <span className="detail-value interest-value">{plan.interest}% годовых</span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Ежемесячно</span>
                    <span className="detail-value monthly-value">₽{plan.monthlyContribution.toLocaleString('ru-RU')}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Прогноз</span>
                    <span className="detail-value">{projectedDate}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="plan-actions-section">
                <button className="plan-action-button primary">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3V15M3 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Пополнить
                </button>
                <button className="plan-action-button secondary">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15 9L9 3M9 3L3 9M9 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Снять
                </button>
                <button className="plan-action-button secondary">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15.5 9H11.5L9.5 14L6.5 4L4.5 9H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  График
                </button>
                <button className="plan-action-button secondary icon-only">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="4.5" r="1.5" fill="currentColor"/>
                    <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
                    <circle cx="9" cy="13.5" r="1.5" fill="currentColor"/>
                  </svg>
                </button>
              </div>

              {/* Recent Transactions - shown when selected */}
              {selectedPlan === plan.id && getPlanTransactions(plan.id).length > 0 && (
                <div className="plan-transactions-section">
                  <h4 className="transactions-heading">Последние операции</h4>
                  <div className="transactions-mini-list">
                    {getPlanTransactions(plan.id).map(transaction => (
                      <div key={transaction.id} className="transaction-mini-row">
                        <div className="transaction-mini-icon">
                          {transaction.type === 'deposit' ? '⬇️' : '⬆️'}
                        </div>
                        <div className="transaction-mini-info">
                          <span className="transaction-mini-desc">{transaction.description}</span>
                          <span className="transaction-mini-date">{formatDate(transaction.date)}</span>
                        </div>
                        <span className={`transaction-mini-amount ${transaction.type === 'deposit' ? 'positive' : 'negative'}`}>
                          {transaction.type === 'deposit' ? '+' : '-'}₽{transaction.amount.toLocaleString('ru-RU')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Tips Section */}
      <div className="saving-tips-section">
        <h2 className="tips-title">💡 Советы по накоплению</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🎯</div>
            <div className="tip-content">
              <h4>Ставьте реалистичные цели</h4>
              <p>Разбивайте большие цели на маленькие этапы для лучшей мотивации</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">📅</div>
            <div className="tip-content">
              <h4>Автоматизируйте платежи</h4>
              <p>Включите автопополнение, чтобы не забывать откладывать деньги</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">💰</div>
            <div className="tip-content">
              <h4>Используйте проценты</h4>
              <p>Накопления с процентами помогут достичь цели быстрее</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">📊</div>
            <div className="tip-content">
              <h4>Отслеживайте прогресс</h4>
              <p>Регулярно проверяйте достижения и корректируйте стратегию</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavingPlans
