import '../styles/BalanceCard.css'

const BalanceCard = ({ user }) => {
  return (
    <div className="balance-card">
      <div className="balance-header">
        <span className="card-holder">{user.name}</span>
        <div className="card-status active">
          <div className="status-dot"></div>
        </div>
      </div>
      
      <div className="balance-amount">
        <span className="balance-label">Баланс</span>
        <div className="balance-value">₽{user.balance.toLocaleString('ru-RU')}</div>
      </div>
      
      <div className="card-footer">
        <div className="card-info">
          <span className="card-label">EXP</span>
          <span className="card-value">{user.exp}</span>
        </div>
        <div className="card-info">
          <span className="card-label">CVV</span>
          <span className="card-value">{user.cvv}</span>
        </div>
      </div>
      
      <div className="card-pattern"></div>
    </div>
  )
}

export default BalanceCard
