import { FC } from 'react'

export const AdminLayout: FC = () => {
  return (
    <>
      <nav className='flex items-center p-6 bg-blue-500 text-white'>
        TopNavBar
      </nav>

      <nav className='flex p-5 bg-red-400 text-white'>Left NavBar</nav>
    </>
  )
}
