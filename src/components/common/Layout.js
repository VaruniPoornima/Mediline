import React from 'react'
import Header from './Header'
import Button from './Button'

export default function Layout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
