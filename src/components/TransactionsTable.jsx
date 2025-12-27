import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/TransactionsTable.css'

const TransactionsTable = ({ transactions }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Этот месяц')
  
  const getStatusClass = (status) => {
    switch(status) {
      case 'Завершен': return 'completed'
      case 'В ожидании': return 'pending'
      case 'Отклонен': return 'failed'
      default: return ''
    }
  }
  
  return (
    <div className="transactions-section">
      <div className="section-header">
        <h2 className="section-title">Последние транзакции</h2>
        <div className="header-actions">
          <button className="period-button">
            {selectedPeriod}
            <Icons.ChevronDown />
          </button>
          <button className="icon-button">
            <Icons.Filter />
          </button>
        </div>
      </div>
      
      <div className="table-container">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Тип</th>
              <th>Дата</th>
              <th>Время</th>
              <th>Сумма</th>
              <th>Примечание</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="transaction-name">{transaction.name}</td>
                <td>{transaction.type}</td>
                <td>{transaction.date}</td>
                <td className="time">{transaction.time}</td>
                <td className="amount">₽{transaction.amount.toFixed(2)}</td>
                <td className="note">{transaction.note}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionsTable
