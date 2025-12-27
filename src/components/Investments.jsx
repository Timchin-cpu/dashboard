import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/Investments.css'

const Investments = () => {
  const [selectedAsset, setSelectedAsset] = useState(null)
  const [timeframe, setTimeframe] = useState('1M')

  // Фейковые данные для инвестиций
  const portfolio = {
    totalValue: 2845600,
    totalInvested: 2100000,
    totalProfit: 745600,
    profitPercent: 35.5,
    dayChange: 12400,
    dayChangePercent: 0.44
  }

  const assets = [
    {
      id: 1,
      name: 'Сбербанк',
      ticker: 'SBER',
      type: 'stocks',
      shares: 150,
      avgPrice: 285.50,
      currentPrice: 312.80,
      invested: 42825,
      currentValue: 46920,
      profit: 4095,
      profitPercent: 9.56,
      dayChange: 1.2,
      icon: '🏦',
      color: '#00b894',
      country: 'RU'
    },
    {
      id: 2,
      name: 'Яндекс',
      ticker: 'YNDX',
      type: 'stocks',
      shares: 80,
      avgPrice: 3420.00,
      currentPrice: 3856.00,
      invested: 273600,
      currentValue: 308480,
      profit: 34880,
      profitPercent: 12.75,
      dayChange: 0.8,
      icon: '🔍',
      color: '#f5576c',
      country: 'RU'
    },
    {
      id: 3,
      name: 'Apple Inc.',
      ticker: 'AAPL',
      type: 'stocks',
      shares: 50,
      avgPrice: 17850.00,
      currentPrice: 19240.00,
      invested: 892500,
      currentValue: 962000,
      profit: 69500,
      profitPercent: 7.79,
      dayChange: 0.5,
      icon: '🍎',
      color: '#667eea',
      country: 'US'
    },
    {
      id: 4,
      name: 'Тинькофф',
      ticker: 'TCS',
      type: 'stocks',
      shares: 100,
      avgPrice: 3150.00,
      currentPrice: 3680.00,
      invested: 315000,
      currentValue: 368000,
      profit: 53000,
      profitPercent: 16.83,
      dayChange: 1.5,
      icon: '💳',
      color: '#ffa502',
      country: 'RU'
    },
    {
      id: 5,
      name: 'Золото',
      ticker: 'GOLD',
      type: 'commodities',
      shares: 100,
      avgPrice: 7200.00,
      currentPrice: 8150.00,
      invested: 720000,
      currentValue: 815000,
      profit: 95000,
      profitPercent: 13.19,
      dayChange: 0.3,
      icon: '🥇',
      color: '#fdcb6e',
      country: 'GLOBAL'
    },
    {
      id: 6,
      name: 'Bitcoin',
      ticker: 'BTC',
      type: 'crypto',
      shares: 0.5,
      avgPrice: 6200000.00,
      currentPrice: 6890000.00,
      invested: 3100000,
      currentValue: 3445000,
      profit: 345000,
      profitPercent: 11.13,
      dayChange: -0.9,
      icon: '₿',
      color: '#f39c12',
      country: 'CRYPTO'
    },
    {
      id: 7,
      name: 'Газпром',
      ticker: 'GAZP',
      type: 'stocks',
      shares: 500,
      avgPrice: 180.00,
      currentPrice: 195.60,
      invested: 90000,
      currentValue: 97800,
      profit: 7800,
      profitPercent: 8.67,
      dayChange: 0.6,
      icon: '⚡',
      color: '#54a0ff',
      country: 'RU'
    },
    {
      id: 8,
      name: 'Nvidia',
      ticker: 'NVDA',
      type: 'stocks',
      shares: 30,
      avgPrice: 48500.00,
      currentPrice: 55200.00,
      invested: 1455000,
      currentValue: 1656000,
      profit: 201000,
      profitPercent: 13.81,
      dayChange: 2.1,
      icon: '🎮',
      color: '#00b894',
      country: 'US'
    }
  ]

  const recentTransactions = [
    { id: 1, type: 'buy', ticker: 'NVDA', shares: 10, price: 55200, date: '2025-01-26', total: 552000 },
    { id: 2, type: 'sell', ticker: 'SBER', shares: 50, price: 312.80, date: '2025-01-25', total: 15640 },
    { id: 3, type: 'buy', ticker: 'BTC', shares: 0.1, price: 6890000, date: '2025-01-24', total: 689000 },
    { id: 4, type: 'dividend', ticker: 'AAPL', shares: 50, price: 120, date: '2025-01-23', total: 6000 },
    { id: 5, type: 'buy', ticker: 'TCS', shares: 20, price: 3680, date: '2025-01-22', total: 73600 }
  ]

  // Фейковые данные для графика
  const chartData = {
    '1D': [2840000, 2842000, 2838000, 2843000, 2845600],
    '1W': [2800000, 2810000, 2825000, 2835000, 2840000, 2842000, 2845600],
    '1M': [2650000, 2700000, 2720000, 2760000, 2800000, 2820000, 2845600],
    '3M': [2400000, 2500000, 2550000, 2600000, 2650000, 2700000, 2750000, 2800000, 2845600],
    '1Y': [2100000, 2200000, 2300000, 2400000, 2500000, 2600000, 2700000, 2800000, 2845600],
    'ALL': [2100000, 2300000, 2500000, 2700000, 2845600]
  }

  const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL']

  // Группировка по типам
  const assetsByType = {
    stocks: assets.filter(a => a.type === 'stocks'),
    crypto: assets.filter(a => a.type === 'crypto'),
    commodities: assets.filter(a => a.type === 'commodities')
  }

  const typeStats = {
    stocks: {
      count: assetsByType.stocks.length,
      value: assetsByType.stocks.reduce((sum, a) => sum + a.currentValue, 0),
      profit: assetsByType.stocks.reduce((sum, a) => sum + a.profit, 0)
    },
    crypto: {
      count: assetsByType.crypto.length,
      value: assetsByType.crypto.reduce((sum, a) => sum + a.currentValue, 0),
      profit: assetsByType.crypto.reduce((sum, a) => sum + a.profit, 0)
    },
    commodities: {
      count: assetsByType.commodities.length,
      value: assetsByType.commodities.reduce((sum, a) => sum + a.currentValue, 0),
      profit: assetsByType.commodities.reduce((sum, a) => sum + a.profit, 0)
    }
  }

  const formatCurrency = (value) => {
    return `₽${value.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  const getTransactionLabel = (type) => {
    const labels = {
      buy: 'Покупка',
      sell: 'Продажа',
      dividend: 'Дивиденды'
    }
    return labels[type] || type
  }

  const getTransactionIcon = (type) => {
    const icons = {
      buy: '📈',
      sell: '📉',
      dividend: '💰'
    }
    return icons[type] || '💼'
  }

  return (
    <div className="investments-page">
      {/* Header */}
      <div className="investments-header">
        <div className="header-content">
          <h1 className="page-title-main">Инвестиции</h1>
          <p className="page-subtitle">Управление инвестиционным портфелем</p>
        </div>
        <button className="add-investment-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Купить актив
        </button>
      </div>

      {/* Portfolio Overview */}
      <div className="portfolio-overview">
        <div className="overview-main">
          <div className="portfolio-value-section">
            <span className="portfolio-label">Стоимость портфеля</span>
            <span className="portfolio-value">{formatCurrency(portfolio.totalValue)}</span>
            <div className="portfolio-changes">
              <span className={`day-change ${portfolio.dayChange >= 0 ? 'positive' : 'negative'}`}>
                {portfolio.dayChange >= 0 ? '+' : ''}{formatCurrency(portfolio.dayChange)}
                ({portfolio.dayChangePercent >= 0 ? '+' : ''}{portfolio.dayChangePercent}%)
              </span>
              <span className="change-period">За сегодня</span>
            </div>
          </div>

          <div className="portfolio-stats-row">
            <div className="stat-box">
              <span className="stat-box-label">Инвестировано</span>
              <span className="stat-box-value">{formatCurrency(portfolio.totalInvested)}</span>
            </div>
            <div className="stat-box">
              <span className="stat-box-label">Прибыль</span>
              <span className="stat-box-value profit-text">
                +{formatCurrency(portfolio.totalProfit)}
              </span>
            </div>
            <div className="stat-box">
              <span className="stat-box-label">Доходность</span>
              <span className="stat-box-value profit-text">+{portfolio.profitPercent}%</span>
            </div>
          </div>
        </div>

        {/* Simple Chart */}
        <div className="portfolio-chart">
          <div className="chart-header">
            <span className="chart-title">Динамика портфеля</span>
            <div className="timeframe-selector">
              {timeframes.map(tf => (
                <button
                  key={tf}
                  className={`timeframe-btn ${timeframe === tf ? 'active' : ''}`}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          <div className="simple-chart">
            <svg width="100%" height="120" viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary-green)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="var(--primary-green)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {(() => {
                const data = chartData[timeframe]
                const max = Math.max(...data)
                const min = Math.min(...data)
                const range = max - min || 1
                const points = data.map((value, index) => {
                  const x = (index / (data.length - 1)) * 400
                  const y = 120 - ((value - min) / range) * 100
                  return `${x},${y}`
                }).join(' ')
                
                return (
                  <>
                    <polyline
                      points={`0,120 ${points} 400,120`}
                      fill="url(#chartGradient)"
                      stroke="none"
                    />
                    <polyline
                      points={points}
                      fill="none"
                      stroke="var(--primary-green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )
              })()}
            </svg>
          </div>
        </div>
      </div>

      {/* Asset Types Distribution */}
      <div className="asset-types-grid">
        <div className="asset-type-card stocks-card">
          <div className="type-header">
            <div className="type-icon">📊</div>
            <div className="type-info">
              <span className="type-name">Акции</span>
              <span className="type-count">{typeStats.stocks.count} активов</span>
            </div>
          </div>
          <div className="type-value">{formatCurrency(typeStats.stocks.value)}</div>
          <div className="type-profit profit-text">
            +{formatCurrency(typeStats.stocks.profit)}
          </div>
        </div>

        <div className="asset-type-card crypto-card">
          <div className="type-header">
            <div className="type-icon">₿</div>
            <div className="type-info">
              <span className="type-name">Криптовалюта</span>
              <span className="type-count">{typeStats.crypto.count} активов</span>
            </div>
          </div>
          <div className="type-value">{formatCurrency(typeStats.crypto.value)}</div>
          <div className="type-profit profit-text">
            +{formatCurrency(typeStats.crypto.profit)}
          </div>
        </div>

        <div className="asset-type-card commodities-card">
          <div className="type-header">
            <div className="type-icon">🥇</div>
            <div className="type-info">
              <span className="type-name">Сырьё</span>
              <span className="type-count">{typeStats.commodities.count} активов</span>
            </div>
          </div>
          <div className="type-value">{formatCurrency(typeStats.commodities.value)}</div>
          <div className="type-profit profit-text">
            +{formatCurrency(typeStats.commodities.profit)}
          </div>
        </div>
      </div>

      {/* Assets List */}
      <div className="assets-section">
        <h2 className="section-title">Мои активы</h2>
        <div className="assets-grid">
          {assets.map((asset, index) => (
            <div
              key={asset.id}
              className="asset-card"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedAsset(selectedAsset === asset.id ? null : asset.id)}
            >
              <div className="asset-header">
                <div 
                  className="asset-icon"
                  style={{ background: asset.color + '20', color: asset.color }}
                >
                  {asset.icon}
                </div>
                <div className="asset-main-info">
                  <h3 className="asset-name">{asset.name}</h3>
                  <div className="asset-ticker-row">
                    <span className="asset-ticker">{asset.ticker}</span>
                    <span className="asset-country">{asset.country}</span>
                  </div>
                </div>
                <div className={`asset-day-change ${asset.dayChange >= 0 ? 'positive' : 'negative'}`}>
                  {asset.dayChange >= 0 ? '+' : ''}{asset.dayChange}%
                </div>
              </div>

              <div className="asset-values">
                <div className="value-row">
                  <span className="value-label">Текущая цена</span>
                  <span className="value-amount">{formatCurrency(asset.currentPrice)}</span>
                </div>
                <div className="value-row">
                  <span className="value-label">Средняя цена</span>
                  <span className="value-amount muted">{formatCurrency(asset.avgPrice)}</span>
                </div>
                <div className="value-row">
                  <span className="value-label">Количество</span>
                  <span className="value-amount">{asset.shares} шт.</span>
                </div>
              </div>

              <div className="asset-summary">
                <div className="summary-item">
                  <span className="summary-label">Инвестировано</span>
                  <span className="summary-value">{formatCurrency(asset.invested)}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Текущая стоимость</span>
                  <span className="summary-value">{formatCurrency(asset.currentValue)}</span>
                </div>
              </div>

              <div className="asset-profit-section">
                <div className="profit-box">
                  <span className="profit-label">Прибыль</span>
                  <span className={`profit-value ${asset.profit >= 0 ? 'positive' : 'negative'}`}>
                    {asset.profit >= 0 ? '+' : ''}{formatCurrency(asset.profit)}
                  </span>
                </div>
                <div className="profit-percent-badge" style={{ 
                  background: asset.profit >= 0 ? 'rgba(67, 233, 123, 0.15)' : 'rgba(255, 71, 87, 0.15)',
                  color: asset.profit >= 0 ? '#43e97b' : '#ff4757'
                }}>
                  {asset.profit >= 0 ? '+' : ''}{asset.profitPercent}%
                </div>
              </div>

              <div className="asset-actions">
                <button className="asset-action-btn buy-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Купить
                </button>
                <button className="asset-action-btn sell-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Продать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="transactions-section">
        <h2 className="section-title">Последние операции</h2>
        <div className="transactions-table-wrapper">
          <table className="transactions-table-inv">
            <thead>
              <tr>
                <th>Тип</th>
                <th>Тикер</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Сумма</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx, index) => (
                <tr key={tx.id} style={{ animationDelay: `${index * 0.05}s` }}>
                  <td>
                    <div className="transaction-type">
                      <span className="tx-icon">{getTransactionIcon(tx.type)}</span>
                      <span className={`tx-label ${tx.type}`}>{getTransactionLabel(tx.type)}</span>
                    </div>
                  </td>
                  <td className="ticker-cell">{tx.ticker}</td>
                  <td>{tx.shares} шт.</td>
                  <td>{formatCurrency(tx.price)}</td>
                  <td className="total-cell">{formatCurrency(tx.total)}</td>
                  <td className="date-cell">
                    {new Date(tx.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Investment Tips */}
      <div className="investment-tips">
        <h2 className="section-title">💡 Советы по инвестированию</h2>
        <div className="tips-grid-inv">
          <div className="tip-card-inv">
            <div className="tip-icon-inv">🎯</div>
            <h4>Диверсификация</h4>
            <p>Не вкладывайте все средства в один актив. Распределите риски между разными секторами.</p>
          </div>
          <div className="tip-card-inv">
            <div className="tip-icon-inv">📊</div>
            <h4>Долгосрочная перспектива</h4>
            <p>Лучшие результаты показывают инвестиции на срок от 3-5 лет и более.</p>
          </div>
          <div className="tip-card-inv">
            <div className="tip-icon-inv">💰</div>
            <h4>Регулярность</h4>
            <p>Инвестируйте регулярно небольшими суммами — это снижает влияние волатильности.</p>
          </div>
          <div className="tip-card-inv">
            <div className="tip-icon-inv">📚</div>
            <h4>Обучение</h4>
            <p>Изучайте рынок, читайте отчёты компаний и следите за новостями.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investments
