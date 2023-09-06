import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <>
    <header className=' bg-opacity-100  py-5 '>
        <nav className='flex justify-between items-center'>
            <div>
           <a href='/' className=' text-white text-xl font-bold uppercase tracking-widest px-4 '> CAFE CHARMANT </a>
            </div>

            <div className=' w-1/6 mr-20'>
               <a href='#' className=' text-lg font-medium tracking-wider pl-16 text-stone-300'> PRODUCTS </a> 
            </div>

            <div className='flex items-center gap-x-2'>
            <button className='flex items-center gap-x-2 pr-8 ' > <ShoppingCartIcon className='h-7 w-7 text-white' /> </button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar