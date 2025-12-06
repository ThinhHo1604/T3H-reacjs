import React from 'react';

const ExpenseFilter = (props) => {
  return (
    <div className='expenses-filter text-white px-4 py-0'>
      <div className='expenses-filter__control flex flex-col sm:flex-row w-full items-center justify-between my-4 mx-0 gap-4 sm:gap-0'>
        <label className='font-bold mb-2 sm:mb-0'>Filter by year & month</label>
        <div className='flex gap-4'>
            <select value={props.selectedMonth} onChange={props.onChangeFilterMonth} className='py-2 px-6 font-bold rounded-md text-white border border-[#40005d] bg-[#40005d] focus:outline-none focus:ring-2 focus:ring-[#40005d] transition-colors'>
            <option value='0'>Jan</option>
            <option value='1'>Feb</option>
            <option value='2'>Mar</option>
            <option value='3'>Apr</option>
            <option value='4'>May</option>
            <option value='5'>Jun</option>
            <option value='6'>Jul</option>
            <option value='7'>Aug</option>
            <option value='8'>Sep</option>
            <option value='9'>Oct</option>
            <option value='10'>Nov</option>
            <option value='11'>Dec</option>
            </select>

            <select value={props.selectedYear} onChange={props.onChangeFilterYear} className='py-2 px-6 font-bold rounded-md text-white border border-[#40005d] bg-[#40005d] focus:outline-none focus:ring-2 focus:ring-[#40005d] transition-colors'>
            <option value='2025'>2025</option>
            <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
