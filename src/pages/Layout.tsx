import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
    <div className='bg-homepage-background w-full h-full bg-cover bg-center bg-no-repeat darken-image'>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default Layout