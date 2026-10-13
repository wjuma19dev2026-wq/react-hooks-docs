import './Sidebar.css'

export const Sidebar = () => {
  return (
    <aside className='w-25 position-absolute top-0 bottom-0 z-0  '>
      <header
        className='text-white px-3'
        style={{ marginTop: '80px' }}
      >
        Menu
      </header>
      <nav className='nav flex-column mt-5'>
        <a
          className='nav-link active'
          aria-current='page'
          href='#'
        >
          useEffect
        </a>
      </nav>
    </aside>
  )
}
