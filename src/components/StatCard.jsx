import '../styles/StatCard.css'

const StatCard = ({ title, amount, change, lastMonth, type }) => {
  const isPositive = change > 0
  const changeClass = type === 'expense' 
    ? (change < 0 ? 'positive' : 'negative') 
    : (isPositive ? 'positive' : 'negative')
  
  return (
    <div className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-amount">₽{amount.toLocaleString('ru-RU')}</div>
      <div className="stat-footer">
        <span className={`stat-change ${changeClass}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="stat-label">Прошлый месяц ₽{lastMonth.toLocaleString('ru-RU')}</span>
      </div>
    </div>
  )
}

export default StatCard
