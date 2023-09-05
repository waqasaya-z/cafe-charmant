import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <>
    <header className='bg-stone-100 py-10'>
        <nav className='flex justify-between'>
            <div>
           <a href='/' className='text-xl font-bold uppercase tracking-widest'> CAFE CHARMANT </a>
            </div>

            <div>
               <a href='#' className='text-xs font-medium tracking-wider text-stone-700'> PRODUCTS </a> 
            </div>

            <div className='flex items-center gap-x-2 pl-4'>
            <button className='flex items-center gap-x-2 pl-4' > <ShoppingCartIcon className='h-7 w-7' /> </button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar