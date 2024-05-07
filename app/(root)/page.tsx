import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import BankInfo from '@/components/BankInfo'
import RecentTransactions from '@/components/RecentTransactions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'

const Home = async() => {
  const loggedIn = { firstName: "Mojo" }
  let userInfo = await getLoggedInUser()
  if (!userInfo) redirect('/sign-up')
  console.log(userInfo)
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {userInfo?.name || 'Guest'}
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