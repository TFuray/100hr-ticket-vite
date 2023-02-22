
const Sidebar = () => {
  return (
    <div>
      <aside className='w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100'>
        <nav className='space-y-8 text-sm'>
          <div className='space-y-2'>
            <h2 className='text-sm font-semibold tracking-widest uppercase dark:text-gray-400'>
              Getting Started
            </h2>
            <div className='flex flex-col space-y-1'>
              <a rel='noopener noreferrer' href='#'>
                Installation
              </a>
              <a rel='noopener noreferrer' href='#'>
                Plugins
              </a>
              <a rel='noopener noreferrer' href='#'>
                Migrations
              </a>
              <a rel='noopener noreferrer' href='#'>
                Appearance
              </a>
              <a rel='noopener noreferrer' href='#'>
                Mamba UI
              </a>
            </div>
          </div>
          <div className='space-y-2'>
            <h2 className='text-sm font-semibold tracking-widest uppercase dark:text-gray-400'>
              Dashboard
            </h2>
            <div className='flex flex-col space-y-1'>
              <a rel='noopener noreferrer' href='#'>
                Header
              </a>
              <a rel='noopener noreferrer' href='#'>
                Drawer
              </a>
              <a rel='noopener noreferrer' href='#'>
                Page Title
              </a>
              <a rel='noopener noreferrer' href='#'>
                Menus
              </a>
              <a rel='noopener noreferrer' href='#'>
                Sidebar
              </a>
              <a rel='noopener noreferrer' href='#'>
                Footer
              </a>
            </div>
          </div>
          <div className='space-y-2'>
            <h2 className='text-sm font-semibold tracking-widest uppercase dark:text-gray-400'>
              Pages
            </h2>
            <div className='flex flex-col space-y-1'>
              <a rel='noopener noreferrer' href='#'>
                Homepage
              </a>
              <a rel='noopener noreferrer' href='#'>
                Users
              </a>
              <a rel='noopener noreferrer' href='#'>
                Tools
              </a>
              <a rel='noopener noreferrer' href='#'>
                Settings
              </a>
            </div>
          </div>
          <div className='space-y-2'>
            <h2 className='text-sm font-semibold tracking-widest uppercase dark:text-gray-400'>
              Misc
            </h2>
            <div className='flex flex-col space-y-1'>
              <a rel='noopener noreferrer' href='#'>
                Tutorials
              </a>
              <a rel='noopener noreferrer' href='#'>
                Changelog
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
