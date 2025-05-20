import { Outlet } from 'react-router-dom'
import Navbar from '../components/templates/Navbar'

export default function Layout() {
  return (
    <div className='flex w-screen p-0 m-0 h-screen overflow-y-hidden '>
      <div className='w-[320px] h-full xs:hidden md:block'>
        <Navbar />
      </div>
      <main className='w-full px-5 pt-6 overflow-y-auto '>
        <Outlet />
      </main>
    </div>
  )
}