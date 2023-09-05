import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <>
    <header>
        <nav className='flex justify-between'>
            <div>
           <a> CAFE </a>
            </div>

            <div>
               <a> PRODUCTS </a> 
            </div>

            <div className='flex flex-row'>
            <button className='h-7 w-7' > <ShoppingCartIcon /> </button>
            <button> SIGN IN </button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar