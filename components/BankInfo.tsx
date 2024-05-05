import React from 'react'
import { Button } from "@/components/ui/button"

const BankInfo = () => {
  return (
    <div className='total-balance'>
      <div className='total-balance-top'>
        <span>3 Bank Accounts</span>
        <Button>
          <span className='text-sky-500'>+ Add bank account</span>
        </Button>
      </div>
      <div className='current-balance'>
        <span>Total Current Balance</span>
        <span className='font-medium text-30'>$129,000.23</span>
      </div>
    </div>
  )
}

export default BankInfo