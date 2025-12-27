import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/CashflowChart.css'

const CashflowChart = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Этот год')
  const maxValue = Math.max(...data.monthlyData.map(d => d.income + Math.abs(d.expense)))
  
  return (
    <div className="cashflow-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Денежный поток</h2>
          <div className="cashflow-balance">
            <span className="balance-label">Общий баланс</span>
            <div className="balance-value">₽{data.totalBalance.toLocaleString('ru-RU')}</div>
          </div>
        </div>
        <div className="period-selector">
          <button className="period-button">
            {selectedPeriod}
            <Icons.ChevronDown />
          </button>
        </div>
      </div>
      
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot income"></span>
          <span>Доход</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot expense"></span>
          <span>Расход</span>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-y-axis">
          <span>10К</span>
          <span>5К</span>
          <span>0</span>
          <span>-5К</span>
          <span>-10К</span>
        </div>
        
        <div className="chart-bars">
          {data.monthlyData.map((month, index) => {
            const incomeHeight = (month.income / maxValue) * 100
            const expenseHeight = (Math.abs(month.expense) / maxValue) * 100
            
            return (
              <div key={index} className="bar-group">
                <div className="bar-wrapper">
                  <div 
                    className="bar income" 
                    style={{ height: `${incomeHeight}%` }}
                    data-value={`₽${month.income.toLocaleString('ru-RU')}`}
                  ></div>
                  <div 
                    className="bar expense" 
                    style={{ height: `${expenseHeight}%` }}
                    data-value={`₽${month.expense.toLocaleString('ru-RU')}`}
                  ></div>
                </div>
                <span className="bar-label">{month.month}</span>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="august-stats">
        <div className="stat-item">
          <span className="stat-label">Доход</span>
          <span className="stat-value">₽9,540</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Расход</span>
          <span className="stat-value">₽8,230</span>
        </div>
      </div>
    </div>
  )
}

export default CashflowChart
