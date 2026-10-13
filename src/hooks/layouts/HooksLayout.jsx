import { Outlet } from 'react-router'
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const HooksLayout = () => {
  return (
    <div>
      <Navbar />

      <div className='d-flex'>
        <Sidebar />
        <main
          className='w-75'
          style={{ marginLeft: '25%' }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}
