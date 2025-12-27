import { Icons } from './Icons'
import '../styles/Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Icons.Dashboard, label: 'Главная', active: true },
    { icon: Icons.Payments, label: 'Платежи' },
    { icon: Icons.Transactions, label: 'Транзакции' },
    { icon: Icons.Invoices, label: 'Счета' },
    { icon: Icons.Cards, label: 'Карты' },
    { icon: Icons.SavingPlans, label: 'Планы накопления' },
    { icon: Icons.Investments, label: 'Инвестиции' },
    { icon: Icons.Insights, label: 'Аналитика' }
  ]

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="logo-text">CONVEST</span>
          </div>
          <button className="close-sidebar" onClick={onClose}>
            <Icons.Close />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <item.icon />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-promo">
          <div className="promo-content">
            <p className="promo-title">Анализируйте расходы, получите финансовый контроль.</p>
            <button className="promo-button">Получить Pro</button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
