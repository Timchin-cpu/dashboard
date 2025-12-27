export const fakeData = {
  user: {
    name: 'Джейми Смит',
    balance: 432568,
    exp: '11/25',
    cvv: '252'
  },
  summary: {
    totalIncome: 42560,
    lastMonthIncome: 38568,
    incomeChange: 2.34,
    totalExpenses: 28358,
    lastMonthExpenses: 26340,
    expensesChange: -2.47,
    totalSaving: 14202,
    lastMonthSaving: 12230,
    savingChange: 1.26
  },
  cashflow: {
    totalBalance: 432568,
    monthlyData: [
      { month: 'Янв', income: 6540, expense: 4235 },
      { month: 'Фев', income: 5823, expense: 5234 },
      { month: 'Мар', income: 7245, expense: 4832 },
      { month: 'Апр', income: 8456, expense: 4234 },
      { month: 'Май', income: 6234, expense: 5123 },
      { month: 'Июн', income: 7890, expense: 4456 },
      { month: 'Июл', income: 9234, expense: 4678 },
      { month: 'Авг', income: 10234, expense: 5890 },
      { month: 'Сен', income: 8456, expense: 5234 },
      { month: 'Окт', income: 7890, expense: 4890 },
      { month: 'Ноя', income: 6234, expense: 6123 },
      { month: 'Дек', income: 8234, expense: 5456 }
    ]
  },
  statistics: {
    income: 42560,
    expense: 28358,
    categories: [
      { name: 'Аренда и Проживание', percentage: 40, amount: 12100 },
      { name: 'Продукты', percentage: 10, amount: 3000 },
      { name: 'Транспорт', percentage: 12, amount: 2000 },
      { name: 'Коммунальные услуги', percentage: 8, amount: 1600 },
      { name: 'Развлечения', percentage: 9, amount: 1400 }
    ]
  },
  transactions: [
    { 
      id: 1, 
      name: 'Счет за электричество', 
      type: 'Платежи', 
      date: '01-11-2025', 
      time: '04:23 PM', 
      amount: 295.41, 
      note: 'Оплата месячного счета за электричество', 
      status: 'Отклонен' 
    },
    { 
      id: 2, 
      name: 'Еженедельные продукты', 
      type: 'Покупки', 
      date: '28-10-2025', 
      time: '03:58 PM', 
      amount: 120.75, 
      note: 'Покупка продуктов в местном супермаркете', 
      status: 'Завершен' 
    },
    { 
      id: 3, 
      name: 'Вечер в кино', 
      type: 'Развлечения', 
      date: '16-10-2025', 
      time: '02:35 PM', 
      amount: 75.99, 
      note: 'Билеты в кино и закуски', 
      status: 'В ожидании' 
    },
    { 
      id: 4, 
      name: 'Счет за газ', 
      type: 'Платежи', 
      date: '01-11-2025', 
      time: '04:40 PM', 
      amount: 150.00, 
      note: 'Оплата месячного счета за газ', 
      status: 'В ожидании' 
    }
  ]
}
