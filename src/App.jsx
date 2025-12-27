import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import BalanceCard from './components/BalanceCard'
import StatCard from './components/StatCard'
import CashflowChart from './components/CashflowChart'
import StatisticsDonut from './components/StatisticsDonut'
import TransactionsTable from './components/TransactionsTable'
import Payments from './components/Payments'
import { fakeData } from './data/fakeData'
import './styles/App.css'
import Transactions from './components/Transactions'
import Invoices from './components/Invoices'
import Cards from './components/Cards'
import SavingPlans from './components/SavingPlans'
import Investments from './components/Investments'
import Insights from './components/Insights'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const [currentPage, setCurrentPage] = useState('dashboard')
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }
  
  return (
    <div className="app">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <main className="main-content">
        <Header 
          onMenuClick={() => setSidebarOpen(true)} 
          userName={fakeData.user.name}
        />
        
        <div className="content-wrapper">
          {currentPage === 'dashboard' && (
            <>
              <div className="top-section">
                <BalanceCard user={fakeData.user} />
                
                <div className="stats-grid">
                  <StatCard 
                    title="Всего доходов"
                    amount={fakeData.summary.totalIncome}
                    change={fakeData.summary.incomeChange}
                    lastMonth={fakeData.summary.lastMonthIncome}
                    type="income"
                  />
                  <StatCard 
                    title="Всего расходов"
                    amount={fakeData.summary.totalExpenses}
                    change={fakeData.summary.expensesChange}
                    lastMonth={fakeData.summary.lastMonthExpenses}
                    type="expense"
                  />
                  <StatCard 
                    title="Всего накоплений"
                    amount={fakeData.summary.totalSaving}
                    change={fakeData.summary.savingChange}
                    lastMonth={fakeData.summary.lastMonthSaving}
                    type="saving"
                  />
                </div>
              </div>
              
              <div className="middle-section">
                <CashflowChart data={fakeData.cashflow} />
                <StatisticsDonut data={fakeData.statistics} />
              </div>
              
              <TransactionsTable transactions={fakeData.transactions} />
            </>
          )}

          {currentPage === 'payments' && (
            <Payments />
          )}
          {currentPage === 'transactions' && (
  <Transactions />
)}
{currentPage === 'invoices' && (
  <Invoices />
)}
{currentPage === 'cards' && (
  <Cards />
)}
{currentPage === 'saving-plans' && (
  <SavingPlans />
)}{currentPage === 'investments' && (
  <Investments />
)}
{currentPage === 'insights' && (
  <Insights />
)}
        </div>
      </main>
    </div>
  )
}

export default App
