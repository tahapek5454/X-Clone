import React from 'react'
import Logo from './logo'
import Menu from './menu'

function Sidebar() {
  return (
    <aside className='w-[275px] min-h-screen px-2'>
        <Logo/>
        <Menu/>
    </aside>
  )
}

export default Sidebar