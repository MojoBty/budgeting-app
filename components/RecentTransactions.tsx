import React from 'react'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const RecentTransactions = () => {
  return (
    <div className='recent-transactions'>
      <div className='recent-transactions-title'>
        <span className='text-26 font-medium'>Recent Transactions</span>
        <Button className='outline-button' variant="outline">
          <span className='text-16'>View All</span>
        </Button>
      </div>
      <Tabs defaultValue="account" className="py-2">
        <TabsList className='bank-list'>
          <TabsTrigger className='bank-list-item' value="account">Chase Bank</TabsTrigger>
          <TabsTrigger className='bank-list-item' value="password">Bank of America</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default RecentTransactions