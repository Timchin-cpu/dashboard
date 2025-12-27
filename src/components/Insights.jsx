import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/Insights.css'

const Insights = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Фейковые данные для аналитики
  const analytics = {
    summary: {
      totalIncome: 185000,
      totalExpenses: 142340,
      balance: 42660,
      savingsRate: 23.1,
      expenseGrowth: -5.2,
      incomeGrowth: 8.5
    },
    topCategories: [
      { name: 'Продукты', amount: 32450, percent: 22.8, icon: '🛒', color: '#f5576c', trend: -3.2 },
      { name: 'Транспорт', amount: 18900, percent: 13.3, icon: '🚗', color: '#ffa502', trend: 2.1 },
      { name: 'Развлечения', amount: 15670, percent: 11.0, icon: '🎬', color: '#667eea', trend: -8.5 },
      { name: 'Рестораны', amount: 14230, percent: 10.0, icon: '🍜', color: '#f39c12', trend: 5.3 },
      { name: 'Коммунальные', amount: 12500, percent: 8.8, icon: '⚡', color: '#54a0ff', trend: 0.5 }
    ],
    monthlyTrends: [
      { month: 'Июль', income: 175000, expenses: 138000, savings: 37000 },
      { month: 'Август', income: 178000, expenses: 145000, savings: 33000 },
      { month: 'Сентябрь', income: 180000, expenses: 148000, savings: 32000 },
      { month: 'Октябрь', income: 182000, expenses: 142000, savings: 40000 },
      { month: 'Ноябрь', income: 183000, expenses: 139000, savings: 44000 },
      { month: 'Декабрь', income: 185000, expenses: 142340, savings: 42660 }
    ],
    weeklyExpenses: [
      { day: 'Пн', amount: 2450 },
      { day: 'Вт', amount: 3200 },
      { day: 'Ср', amount: 1800 },
      { day: 'Чт', amount: 4100 },
      { day: 'Пт', amount: 5600 },
      { day: 'Сб', amount: 8900 },
      { day: 'Вс', amount: 6200 }
    ],
    budgetHealth: {
      onTrack: 65,
      warning: 25,
      exceeded: 10
    },
    insights: [
      {
        id: 1,
        type: 'success',
        icon: '🎉',
        title: 'Отличная работа!',
        description: 'Ваши расходы снизились на 5.2% по сравнению с прошлым месяцем',
        action: 'Подробнее'
      },
      {
        id: 2,
        type: 'warning',
        icon: '⚠️',
        title: 'Внимание к развлечениям',
        description: 'Расходы на развлечения выросли на 15% и превышают запланированный бюджет',
        action: 'Посмотреть детали'
      },
      {
        id: 3,
        type: 'tip',
        icon: '💡',
        title: 'Возможность сэкономить',
        description: 'Вы можете сэкономить до 8,500₽ в месяц, оптимизировав расходы на рестораны',
        action: 'Узнать как'
      },
      {
        id: 4,
        type: 'info',
        icon: '📊',
        title: 'Растущий доход',
        description: 'Ваш доход вырос на 8.5% — продолжайте в том же духе!',
        action: 'Статистика'
      }
    ],
    goals: [
      { name: 'Сбережения', current: 85, target: 100, status: 'ontrack' },
      { name: 'Инвестиции', current: 72, target: 100, status: 'ontrack' },
      { name: 'Долги', current: 45, target: 0, status: 'warning' }
    ],
    compareData: {
      avgUser: 156000,
      yourExpenses: 142340,
      percentile: 68
    }
  }

  const periods = [
    { value: 'week', label: 'Неделя' },
    { value: 'month', label: 'Месяц' },
    { value: 'quarter', label: 'Квартал' },
    { value: 'year', label: 'Год' }
  ]

  const getInsightClass = (type) => {
    const classes = {
      success: 'insight-success',
      warning: 'insight-warning',
      tip: 'insight-tip',
      info: 'insight-info'
    }
    return classes[type] || 'insight-info'
  }

  const getStatusColor = (status) => {
    const colors = {
      ontrack: '#43e97b',
      warning: '#ffa502',
      danger: '#ff4757'
    }
    return colors[status] || '#54a0ff'
  }

  return (
    <div className="insights-page">
      {/* Header */}
      <div className="insights-header">
        <div className="header-content">
          <h1 className="page-title-main">Аналитика</h1>
          <p className="page-subtitle">Умные инсайты и рекомендации по вашим финансам</p>
        </div>
        <div className="period-selector-insights">
          {periods.map(period => (
            <button
              key={period.value}
              className={`period-btn ${selectedPeriod === period.value ? 'active' : ''}`}
              onClick={() => setSelectedPeriod(period.value)}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card income-summary">
          <div className="summary-icon-wrapper">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 8V20M14 8L10 12M14 8L18 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-label">Общий доход</span>
            <span className="summary-value income-color">₽{analytics.summary.totalIncome.toLocaleString('ru-RU')}</span>
            <span className="summary-change positive">
              +{analytics.summary.incomeGrowth}% к прошлому периоду
            </span>
          </div>
        </div>

        <div className="summary-card expense-summary">
          <div className="summary-icon-wrapper">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 20V8M14 20L10 16M14 20L18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-label">Общий расход</span>
            <span className="summary-value expense-color">₽{analytics.summary.totalExpenses.toLocaleString('ru-RU')}</span>
            <span className="summary-change negative">
              {analytics.summary.expenseGrowth}% к прошлому периоду
            </span>
          </div>
        </div>

        <div className="summary-card balance-summary">
          <div className="summary-icon-wrapper">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4L4 9L14 14L24 9L14 4Z" fill="currentColor"/>
              <path d="M4 19L14 24L24 19" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 14L14 19L24 14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-label">Чистый баланс</span>
            <span className="summary-value balance-color">₽{analytics.summary.balance.toLocaleString('ru-RU')}</span>
            <span className="summary-change positive">
              Норма сбережений: {analytics.summary.savingsRate}%
            </span>
          </div>
        </div>
      </div>

      {/* Insights Cards */}
      <div className="insights-section">
        <h2 className="section-title-insights">💡 Персональные инсайты</h2>
        <div className="insights-grid">
          {analytics.insights.map((insight) => (
            <div key={insight.id} className={`insight-card ${getInsightClass(insight.type)}`}>
              <div className="insight-icon-large">{insight.icon}</div>
              <div className="insight-content">
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-description">{insight.description}</p>
              </div>
              <button className="insight-action">{insight.action} →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories */}
      <div className="categories-section">
        <h2 className="section-title-insights">📊 Топ категорий расходов</h2>
        <div className="categories-list">
          {analytics.topCategories.map((category, index) => (
            <div key={index} className="category-item" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="category-rank">#{index + 1}</div>
              <div className="category-icon-box" style={{ background: category.color + '20', color: category.color }}>
                <span className="category-icon-emoji">{category.icon}</span>
              </div>
              <div className="category-info">
                <div className="category-name-row">
                  <span className="category-name">{category.name}</span>
                  <span className={`category-trend ${category.trend >= 0 ? 'trend-up' : 'trend-down'}`}>
                    {category.trend >= 0 ? '↑' : '↓'} {Math.abs(category.trend)}%
                  </span>
                </div>
                <div className="category-progress-container">
                  <div className="category-progress-bar">
                    <div 
                      className="category-progress-fill" 
                      style={{ width: `${category.percent}%`, background: category.color }}
                    />
                  </div>
                  <span className="category-percent">{category.percent}%</span>
                </div>
              </div>
              <div className="category-amount">₽{category.amount.toLocaleString('ru-RU')}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Trends Chart */}
      <div className="trends-section">
        <h2 className="section-title-insights">📈 Тренды за 6 месяцев</h2>
        <div className="trends-chart-container">
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-dot income-dot"></div>
              <span>Доходы</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot expense-dot"></div>
              <span>Расходы</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot savings-dot"></div>
              <span>Сбережения</span>
            </div>
          </div>

          <div className="trends-chart">
            <div className="chart-grid">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="grid-line" style={{ bottom: `${i * 25}%` }}></div>
              ))}
            </div>

            <div className="chart-bars">
              {analytics.monthlyTrends.map((month, index) => {
                const maxValue = 200000
                const incomeHeight = (month.income / maxValue) * 100
                const expenseHeight = (month.expenses / maxValue) * 100
                const savingsHeight = (month.savings / maxValue) * 100

                return (
                  <div key={index} className="chart-column">
                    <div className="bars-group">
                      <div 
                        className="bar income-bar" 
                        style={{ height: `${incomeHeight}%` }}
                        title={`Доход: ₽${month.income.toLocaleString('ru-RU')}`}
                      >
                        <span className="bar-label">₽{(month.income / 1000).toFixed(0)}k</span>
                      </div>
                      <div 
                        className="bar expense-bar" 
                        style={{ height: `${expenseHeight}%` }}
                        title={`Расход: ₽${month.expenses.toLocaleString('ru-RU')}`}
                      >
                        <span className="bar-label">₽{(month.expenses / 1000).toFixed(0)}k</span>
                      </div>
                      <div 
                        className="bar savings-bar" 
                        style={{ height: `${savingsHeight}%` }}
                        title={`Сбережения: ₽${month.savings.toLocaleString('ru-RU')}`}
                      >
                        <span className="bar-label">₽{(month.savings / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                    <span className="chart-month-label">{month.month}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Expenses */}
      <div className="weekly-section">
        <h2 className="section-title-insights">📅 Расходы по дням недели</h2>
        <div className="weekly-chart">
          {analytics.weeklyExpenses.map((day, index) => {
            const maxAmount = Math.max(...analytics.weeklyExpenses.map(d => d.amount))
            const height = (day.amount / maxAmount) * 100

            return (
              <div key={index} className="weekly-bar-container">
                <div className="weekly-bar-wrapper">
                  <div 
                    className="weekly-bar" 
                    style={{ height: `${height}%` }}
                  >
                    <span className="weekly-bar-value">₽{(day.amount / 1000).toFixed(1)}k</span>
                  </div>
                </div>
                <span className="weekly-day-label">{day.day}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Budget Health & Goals */}
      <div className="bottom-grid">
        <div className="budget-health-card">
          <h3 className="card-title-small">🎯 Здоровье бюджета</h3>
          <div className="health-donut">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke="var(--bg-card)"
                strokeWidth="20"
              />
              {(() => {
                const { onTrack, warning, exceeded } = analytics.budgetHealth
                const total = onTrack + warning + exceeded
                let currentAngle = -90

                const createArc = (percent, color) => {
                  const angle = (percent / total) * 360
                  const startAngle = currentAngle
                  const endAngle = currentAngle + angle
                  currentAngle = endAngle

                  const startRad = (startAngle * Math.PI) / 180
                  const endRad = (endAngle * Math.PI) / 180
                  
                  const x1 = 90 + 70 * Math.cos(startRad)
                  const y1 = 90 + 70 * Math.sin(startRad)
                  const x2 = 90 + 70 * Math.cos(endRad)
                  const y2 = 90 + 70 * Math.sin(endRad)
                  
                  const largeArc = angle > 180 ? 1 : 0

                  return (
                    <path
                      key={startAngle}
                      d={`M 90 90 L ${x1} ${y1} A 70 70 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={color}
                    />
                  )
                }

                return (
                  <>
                    {createArc(onTrack, '#43e97b')}
                    {createArc(warning, '#ffa502')}
                    {createArc(exceeded, '#ff4757')}
                    <circle cx="90" cy="90" r="50" fill="var(--bg-secondary)"/>
                  </>
                )
              })()}
              <text x="90" y="85" textAnchor="middle" fill="var(--text-primary)" fontSize="28" fontWeight="800">
                {analytics.budgetHealth.onTrack}%
              </text>
              <text x="90" y="105" textAnchor="middle" fill="var(--text-muted)" fontSize="14">
                В норме
              </text>
            </svg>
          </div>
          <div className="health-legend">
            <div className="health-legend-item">
              <div className="health-dot" style={{ background: '#43e97b' }}></div>
              <span>В норме ({analytics.budgetHealth.onTrack}%)</span>
            </div>
            <div className="health-legend-item">
              <div className="health-dot" style={{ background: '#ffa502' }}></div>
              <span>Внимание ({analytics.budgetHealth.warning}%)</span>
            </div>
            <div className="health-legend-item">
              <div className="health-dot" style={{ background: '#ff4757' }}></div>
              <span>Превышено ({analytics.budgetHealth.exceeded}%)</span>
            </div>
          </div>
        </div>

        <div className="goals-card">
          <h3 className="card-title-small">🎯 Прогресс целей</h3>
          <div className="goals-list">
            {analytics.goals.map((goal, index) => (
              <div key={index} className="goal-item">
                <div className="goal-header-row">
                  <span className="goal-name">{goal.name}</span>
                  <span className="goal-percentage">{goal.current}%</span>
                </div>
                <div className="goal-progress-bar">
                  <div 
                    className="goal-progress-fill" 
                    style={{ 
                      width: `${goal.current}%`,
                      background: getStatusColor(goal.status)
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="compare-card">
          <h3 className="card-title-small">👥 Сравнение со средним пользователем</h3>
          <div className="compare-content">
            <div className="compare-stat">
              <span className="compare-label">Средний пользователь</span>
              <span className="compare-value">₽{analytics.compareData.avgUser.toLocaleString('ru-RU')}</span>
            </div>
            <div className="compare-divider"></div>
            <div className="compare-stat">
              <span className="compare-label">Ваши расходы</span>
              <span className="compare-value highlighted">₽{analytics.compareData.yourExpenses.toLocaleString('ru-RU')}</span>
            </div>
            <div className="compare-result">
              <div className="result-badge success">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Вы тратите на {((1 - analytics.compareData.yourExpenses / analytics.compareData.avgUser) * 100).toFixed(1)}% меньше
              </div>
              <p className="result-text">
                Вы в топ {analytics.compareData.percentile}% самых экономных пользователей!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="recommendations-section">
        <h2 className="section-title-insights">🤖 AI рекомендации</h2>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <div className="rec-icon">🍔</div>
            <div className="rec-content">
              <h4>Оптимизируйте расходы на еду</h4>
              <p>Вы тратите на 15% больше среднего на рестораны. Готовя дома 2 раза в неделю, вы сэкономите ~6,000₽/мес</p>
            </div>
          </div>
          <div className="recommendation-card">
            <div className="rec-icon">📱</div>
            <div className="rec-content">
              <h4>Проверьте подписки</h4>
              <p>Обнаружено 5 активных подписок. Возможно, некоторые из них вы не используете</p>
            </div>
          </div>
          <div className="recommendation-card">
            <div className="rec-icon">💰</div>
            <div className="rec-content">
              <h4>Увеличьте сбережения</h4>
              <p>При текущем темпе вы достигнете цели в 500,000₽ через 8 месяцев. Увеличив взнос на 5,000₽, сократите срок до 6 месяцев</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
