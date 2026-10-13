import './Sidebar.css'

export const Sidebar = () => {
  return (
    <aside className='w-25 position-absolute top-0 bottom-0 z-0  '>
      <header
        className='text-white px-3'
        style={{ marginTop: '70px' }}
      >
        Componentes
      </header>
      <nav className='nav flex-column mt-3'>
        <a
          className='nav-link'
          aria-current='page'
          href='#'
        >
          <i className='bi bi-circle mx-3'></i>
          useEffect
        </a>
      </nav>
    </aside>
  )
}
