import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import BankInfo from '@/components/BankInfo'
import RecentTransactions from '@/components/RecentTransactions'

const Home = () => {
  const loggedIn = { firstName: "Mojo" }

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "View and manage your transactions."
          />
        </header>
        <div className=''>
          <BankInfo />
        </div>
        <div>
          <RecentTransactions />
        </div>
      </div>
    </section>
  )
}

export default Home