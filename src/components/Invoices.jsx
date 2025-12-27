import { useState } from 'react'
import { Icons } from './Icons'
import '../styles/Invoices.css'

const Invoices = () => {
  const [selectedStatus, setSelectedStatus] = useState('Все')
  const [selectedPeriod, setSelectedPeriod] = useState('Этот месяц')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // grid or table

  // Фейковые данные для счетов
  const statusOptions = ['Все', 'Оплачен', 'Ожидает оплаты', 'Просрочен', 'Черновик']
  const periodOptions = ['Эта неделя', 'Этот месяц', 'Прошлый месяц', 'Этот квартал', 'Этот год']

  const invoices = [
    {
      id: 'INV-2025-001',
      client: 'ООО "Технологии Будущего"',
      clientEmail: 'info@techfuture.ru',
      service: 'Веб-разработка корпоративного сайта',
      amount: 150000.00,
      date: '2025-01-15',
      dueDate: '2025-02-15',
      status: 'sent',
      items: [
        { name: 'Дизайн интерфейса', quantity: 1, price: 50000 },
        { name: 'Разработка фронтенда', quantity: 1, price: 60000 },
        { name: 'Настройка бэкенда', quantity: 1, price: 40000 }
      ],
      invoiceNumber: '001',
      icon: '🌐',
      color: '#9ef01a'
    },
    {
      id: 'INV-2025-002',
      client: 'ИП Иванов Иван Иванович',
      clientEmail: 'ivanov@mail.ru',
      service: 'Консультация по SEO-оптимизации',
      amount: 25000.00,
      date: '2025-01-10',
      dueDate: '2025-01-25',
      status: 'paid',
      items: [
        { name: 'SEO аудит сайта', quantity: 1, price: 15000 },
        { name: 'Рекомендации по оптимизации', quantity: 1, price: 10000 }
      ],
      invoiceNumber: '002',
      icon: '🔍',
      color: '#00b894'
    },
    {
      id: 'INV-2025-003',
      client: 'ООО "Строй-Мастер"',
      clientEmail: 'orders@stroymaster.ru',
      service: 'Создание мобильного приложения',
      amount: 280000.00,
      date: '2025-01-08',
      dueDate: '2025-01-20',
      status: 'overdue',
      items: [
        { name: 'Дизайн UI/UX', quantity: 1, price: 80000 },
        { name: 'iOS разработка', quantity: 1, price: 100000 },
        { name: 'Android разработка', quantity: 1, price: 100000 }
      ],
      invoiceNumber: '003',
      icon: '📱',
      color: '#ff6348'
    },
    {
      id: 'INV-2025-004',
      client: 'Фитнес-клуб "Энергия"',
      clientEmail: 'manager@energia-fit.ru',
      service: 'Разработка системы бронирования',
      amount: 95000.00,
      date: '2025-01-20',
      dueDate: '2025-02-20',
      status: 'sent',
      items: [
        { name: 'Интеграция с CRM', quantity: 1, price: 45000 },
        { name: 'Личный кабинет клиента', quantity: 1, price: 35000 },
        { name: 'Панель администратора', quantity: 1, price: 15000 }
      ],
      invoiceNumber: '004',
      icon: '🏋️',
      color: '#6c5ce7'
    },
    {
      id: 'INV-2025-005',
      client: 'Ресторан "Вкусно и точка"',
      clientEmail: 'digital@vkusno.ru',
      service: 'Настройка онлайн-заказов',
      amount: 60000.00,
      date: '2025-01-18',
      dueDate: '2025-02-05',
      status: 'paid',
      items: [
        { name: 'Меню онлайн', quantity: 1, price: 20000 },
        { name: 'Система заказов', quantity: 1, price: 30000 },
        { name: 'Интеграция с доставкой', quantity: 1, price: 10000 }
      ],
      invoiceNumber: '005',
      icon: '🍔',
      color: '#fdcb6e'
    },
    {
      id: 'INV-2025-006',
      client: 'ООО "Медицинский Центр Здоровье"',
      clientEmail: 'it@zdorovie-med.ru',
      service: 'Электронная медицинская карта',
      amount: 320000.00,
      date: '2025-01-05',
      dueDate: '2025-01-18',
      status: 'paid',
      items: [
        { name: 'База данных пациентов', quantity: 1, price: 120000 },
        { name: 'Система записи на прием', quantity: 1, price: 100000 },
        { name: 'Личный кабинет врача', quantity: 1, price: 100000 }
      ],
      invoiceNumber: '006',
      icon: '⚕️',
      color: '#00cec9'
    },
    {
      id: 'INV-2025-007',
      client: 'Интернет-магазин "Электроника+"',
      clientEmail: 'support@electroplus.ru',
      service: 'Разработка каталога товаров',
      amount: 180000.00,
      date: '2025-01-22',
      dueDate: '2025-02-22',
      status: 'draft',
      items: [
        { name: 'Фильтры и поиск', quantity: 1, price: 60000 },
        { name: 'Корзина и оформление', quantity: 1, price: 70000 },
        { name: 'Личный кабинет', quantity: 1, price: 50000 }
      ],
      invoiceNumber: '007',
      icon: '🛒',
      color: '#a29bfe'
    },
    {
      id: 'INV-2025-008',
      client: 'Образовательный центр "Знание"',
      clientEmail: 'admin@znanie-edu.ru',
      service: 'Платформа онлайн-обучения',
      amount: 450000.00,
      date: '2025-01-12',
      dueDate: '2025-02-12',
      status: 'sent',
      items: [
        { name: 'Видео-платформа', quantity: 1, price: 200000 },
        { name: 'Тестирование знаний', quantity: 1, price: 150000 },
        { name: 'Сертификаты', quantity: 1, price: 100000 }
      ],
      invoiceNumber: '008',
      icon: '📚',
      color: '#e17055'
    }
  ]

  // Статистика
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidAmount = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0)
  const pendingAmount = invoices.filter(inv => inv.status === 'sent').reduce((sum, inv) => sum + inv.amount, 0)
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0)

  const getStatusInfo = (status) => {
    switch(status) {
      case 'paid':
        return { label: 'Оплачен', class: 'paid', icon: '✓' }
      case 'sent':
        return { label: 'Ожидает оплаты', class: 'sent', icon: '⏱' }
      case 'overdue':
        return { label: 'Просрочен', class: 'overdue', icon: '⚠' }
      case 'draft':
        return { label: 'Черновик', class: 'draft', icon: '📝' }
      default:
        return { label: 'Неизвестно', class: '', icon: '?' }
    }
  }

  const filteredInvoices = invoices.filter(invoice => {
    const matchesStatus = 
      selectedStatus === 'Все' ||
      (selectedStatus === 'Оплачен' && invoice.status === 'paid') ||
      (selectedStatus === 'Ожидает оплаты' && invoice.status === 'sent') ||
      (selectedStatus === 'Просрочен' && invoice.status === 'overdue') ||
      (selectedStatus === 'Черновик' && invoice.status === 'draft')

    const matchesSearch = 
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesStatus && matchesSearch
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })
  }

  const getDaysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="invoices-page">
      {/* Header */}
      <div className="invoices-header">
        <div className="header-content">
          <h1 className="page-title-main">Счета</h1>
          <p className="page-subtitle">Управление счетами и платежами от клиентов</p>
        </div>
        <button className="create-invoice-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Создать счёт
        </button>
      </div>

      {/* Statistics */}
      <div className="invoice-stats-grid">
        <div className="invoice-stat-card total-card">
          <div className="stat-header">
            <div className="stat-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 9H21M9 3V9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="stat-trend positive">+12%</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">Всего счетов</span>
            <span className="stat-value">₽{totalAmount.toLocaleString('ru-RU')}</span>
            <span className="stat-count">{invoices.length} счетов</span>
          </div>
        </div>

        <div className="invoice-stat-card paid-card">
          <div className="stat-header">
            <div className="stat-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="stat-trend positive">+8%</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">Оплачено</span>
            <span className="stat-value paid-value">₽{paidAmount.toLocaleString('ru-RU')}</span>
            <span className="stat-count">{invoices.filter(i => i.status === 'paid').length} счетов</span>
          </div>
        </div>

        <div className="invoice-stat-card pending-card">
          <div className="stat-header">
            <div className="stat-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="stat-trend neutral">—</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">Ожидает оплаты</span>
            <span className="stat-value pending-value">₽{pendingAmount.toLocaleString('ru-RU')}</span>
            <span className="stat-count">{invoices.filter(i => i.status === 'sent').length} счетов</span>
          </div>
        </div>

        <div className="invoice-stat-card overdue-card">
          <div className="stat-header">
            <div className="stat-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7V13M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="stat-trend negative">+3%</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">Просрочено</span>
            <span className="stat-value overdue-value">₽{overdueAmount.toLocaleString('ru-RU')}</span>
            <span className="stat-count">{invoices.filter(i => i.status === 'overdue').length} счетов</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="invoices-controls">
        <div className="status-filters">
          {statusOptions.map((status) => (
            <button
              key={status}
              className={`status-filter-btn ${selectedStatus === status ? 'active' : ''}`}
              onClick={() => setSelectedStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="control-actions">
          <div className="period-selector">
            <select 
              value={selectedPeriod} 
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="period-select"
            >
              {periodOptions.map(period => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
          </div>

          <div className="search-box-invoice">
            <Icons.Search />
            <input
              type="text"
              placeholder="Поиск счетов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Сетка"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button 
              className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
              title="Таблица"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Invoices Grid/Table */}
      {viewMode === 'grid' ? (
        <div className="invoices-grid">
          {filteredInvoices.map((invoice, index) => {
            const statusInfo = getStatusInfo(invoice.status)
            const daysUntilDue = getDaysUntilDue(invoice.dueDate)
            
            return (
              <div 
                key={invoice.id} 
                className="invoice-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="invoice-card-header">
                  <div className="invoice-icon" style={{ background: invoice.color + '20', color: invoice.color }}>
                    <span>{invoice.icon}</span>
                  </div>
                  <div className="invoice-number">
                    <span className="number-label">№</span>
                    <span className="number-value">{invoice.invoiceNumber}</span>
                  </div>
                </div>

                <div className="invoice-card-body">
                  <div className="client-info">
                    <h3 className="client-name">{invoice.client}</h3>
                    <p className="client-email">{invoice.clientEmail}</p>
                  </div>

                  <div className="service-info">
                    <span className="service-label">Услуга</span>
                    <p className="service-name">{invoice.service}</p>
                  </div>

                  <div className="invoice-details">
                    <div className="detail-item">
                      <span className="detail-label">Дата выставления</span>
                      <span className="detail-value">{formatDate(invoice.date)}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Срок оплаты</span>
                      <span className={`detail-value ${daysUntilDue < 0 ? 'overdue-text' : daysUntilDue < 7 ? 'warning-text' : ''}`}>
                        {formatDate(invoice.dueDate)}
                        {daysUntilDue >= 0 && daysUntilDue < 7 && ` (${daysUntilDue} дн.)`}
                        {daysUntilDue < 0 && ` (просрочено ${Math.abs(daysUntilDue)} дн.)`}
                      </span>
                    </div>
                  </div>

                  <div className="invoice-amount-row">
                    <span className="amount-label">Сумма</span>
                    <span className="amount-value">₽{invoice.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <div className="invoice-card-footer">
                  <span className={`invoice-status ${statusInfo.class}`}>
                    <span className="status-icon">{statusInfo.icon}</span>
                    {statusInfo.label}
                  </span>
                  <div className="invoice-actions">
                    <button className="action-btn view-btn" title="Просмотр">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3C5 3 2 9 2 9C2 9 5 15 9 15C13 15 16 9 16 9C16 9 13 3 9 3Z" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </button>
                    <button className="action-btn download-btn" title="Скачать">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3V12M9 12L6 9M9 12L12 9M3 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="action-btn send-btn" title="Отправить">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M16 2L8 10M16 2L11 16L8 10M16 2L2 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="invoices-table-container">
          <table className="invoices-table">
            <thead>
              <tr>
                <th>Номер</th>
                <th>Клиент</th>
                <th>Услуга</th>
                <th>Дата</th>
                <th>Срок оплаты</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice, index) => {
                const statusInfo = getStatusInfo(invoice.status)
                const daysUntilDue = getDaysUntilDue(invoice.dueDate)
                
                return (
                  <tr 
                    key={invoice.id}
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <td className="invoice-id">
                      <div className="id-cell">
                        <div className="invoice-icon-small" style={{ background: invoice.color + '20', color: invoice.color }}>
                          {invoice.icon}
                        </div>
                        {invoice.id}
                      </div>
                    </td>
                    <td>
                      <div className="client-cell">
                        <span className="client-name-table">{invoice.client}</span>
                        <span className="client-email-table">{invoice.clientEmail}</span>
                      </div>
                    </td>
                    <td className="service-cell">{invoice.service}</td>
                    <td className="date-cell">{formatDate(invoice.date)}</td>
                    <td className={`due-date-cell ${daysUntilDue < 0 ? 'overdue-text' : daysUntilDue < 7 ? 'warning-text' : ''}`}>
                      {formatDate(invoice.dueDate)}
                      {daysUntilDue >= 0 && daysUntilDue < 7 && <div className="days-left">{daysUntilDue} дн.</div>}
                      {daysUntilDue < 0 && <div className="days-overdue">-{Math.abs(daysUntilDue)} дн.</div>}
                    </td>
                    <td className="amount-cell">₽{invoice.amount.toLocaleString('ru-RU')}</td>
                    <td>
                      <span className={`invoice-status-table ${statusInfo.class}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button className="table-action-btn" title="Просмотр">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 3C5 3 2 8 2 8C2 8 5 13 8 13C11 13 14 8 14 8C14 8 11 3 8 3Z" stroke="currentColor" strokeWidth="1.5"/>
                            <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                        </button>
                        <button className="table-action-btn" title="Скачать">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 3V11M8 11L5 8M8 11L11 8M3 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="table-action-btn" title="Меню">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="4" r="1" fill="currentColor"/>
                            <circle cx="8" cy="8" r="1" fill="currentColor"/>
                            <circle cx="8" cy="12" r="1" fill="currentColor"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {filteredInvoices.length === 0 && (
        <div className="no-invoices">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 24H52M20 12V24M44 12V24" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <h3>Счета не найдены</h3>
          <p>Попробуйте изменить фильтры или создайте новый счёт</p>
        </div>
      )}
    </div>
  )
}

export default Invoices
