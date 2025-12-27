import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/StatisticsDonut.css'

const StatisticsDonut = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Этот месяц')
  const total = data.income + data.expense
  const incomePercentage = (data.income / total) * 100
  const expensePercentage = (data.expense / total) * 100
  
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const incomeStroke = (incomePercentage / 100) * circumference
  const expenseStroke = (expensePercentage / 100) * circumference
  
  return (
    <div className="statistics-section">
      <div className="section-header">
        <h2 className="section-title">Статистика</h2>
        <button className="period-button">
          {selectedPeriod}
          <Icons.ChevronDown />
        </button>
      </div>
      
      <div className="donut-container">
        <svg viewBox="0 0 200 200" className="donut-chart">
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#1a3a2e"
            strokeWidth="40"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#9ef01a"
            strokeWidth="40"
            strokeDasharray={`${incomeStroke} ${circumference}`}
            strokeDashoffset="0"
            transform="rotate(-90 100 100)"
            className="donut-segment income-segment"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#0f2419"
            strokeWidth="40"
            strokeDasharray={`${expenseStroke} ${circumference}`}
            strokeDashoffset={-incomeStroke}
            transform="rotate(-90 100 100)"
            className="donut-segment expense-segment"
          />
        </svg>
        
        <div className="donut-center">
          <div className="donut-label">Доход</div>
          <div className="donut-amount">₽{data.income.toLocaleString('ru-RU')}</div>
        </div>
        
        <div className="donut-legend">
          <div className="legend-row">
            <span className="legend-dot income"></span>
            <span className="legend-label">Доход</span>
          </div>
          <div className="legend-row">
            <span className="legend-dot expense"></span>
            <span className="legend-label">Расход</span>
          </div>
        </div>
      </div>
      
      <div className="expense-breakdown">
        {data.categories.map((category, index) => (
          <div key={index} className="expense-item">
            <div className="expense-info">
              <div className="expense-bar-container">
                <div 
                  className="expense-bar" 
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <span className="expense-percentage">{category.percentage}%</span>
              <span className="expense-name">{category.name}</span>
            </div>
            <span className="expense-amount">₽{category.amount.toLocaleString('ru-RU')}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatisticsDonut
