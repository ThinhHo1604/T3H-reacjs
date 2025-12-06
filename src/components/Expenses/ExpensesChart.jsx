import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const year = parseInt(props.year);
  const month = parseInt(props.month);
  
  // Get number of days in the selected month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const chartDataPoints = [];
  
  for (let i = 1; i <= daysInMonth; i++) {
    chartDataPoints.push({ label: i.toString(), value: 0 });
  }

  for (const expense of props.expenses) {
    const expenseDay = expense.date.getDate(); // 1..31
    // adjust index (day 1 is at index 0)
    chartDataPoints[expenseDay - 1].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} maxValue={1000000} />;
};

export default ExpensesChart;
