import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartSlider from './CartSlider';

const Navbar = () => {
 const [cart,setCart] = useState(false);
  return (
    <>
    <header className=' bg-opacity-100  py-5 '>
        <nav className='flex justify-between items-center'>
            <div>
           <Link to='/' className=' text-white text-xl font-bold uppercase tracking-widest px-4 '> CAFE CHARMANT </Link>
            </div>

            <div className=' w-1/6 mr-20'>
               <Link to='/products' className=' text-lg font-medium tracking-wider pl-16 text-stone-300'> PRODUCTS </Link> 
            </div>

            <div className='flex items-center gap-x-2'>
            <button className='flex items-center gap-x-2 pr-8 ' onClick={() => setCart(!cart)} > <ShoppingCartIcon className='h-7 w-7 text-white' /> </button>
            <div className=' z-0 '> {cart && <CartSlider />  } </div>  
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar