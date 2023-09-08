import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='relative'>
    <div className='absolute inset-0 bg-homepage-background bg-cover bg-center bg-no-repeat darken-image'></div>
    <div className='relative z-10'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  </div>
  )
}

export default Layout