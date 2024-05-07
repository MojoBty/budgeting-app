import React from 'react'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <div>
          Logo
        </div>
        <div className='py-20'>
          <div className='text-20 px-8 py-6 font-semibold'>
            Home
          </div>
          <div className='text-20 px-8 py-6 font-semibold'>
            Income
          </div>
          <div className='text-20 px-8 py-6 font-semibold text-nowrap'>
            Budgets
          </div>
          <div className='text-20 px-8 py-6 font-semibold text-nowrap'>
            Transaction History
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Sidebar