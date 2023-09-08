import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
  <> 
  <div className="h-screen flex flex-col justify-center items-center ml-8">
    <div className='w-1/4 cursor-pointer flex items-center border border-slate-400 text-sm hover:border-white rounded-xl'>
        <p className="text-slate-400 p-1"> Announcing our next round of funding.  </p>
        <a className="flex text-white font-bold ml-2 mt-1"> Learn More   <span className='w-6 h-6'> <ArrowLongRightIcon /> </span> </a>
    </div>
    <div className='w-2/4 flex flex-col items-center justify-center mt-6 text-center'>
        <h1 className=" text-white text-6xl font-bold w-3/4"> Our Coffees are roasted with Love. </h1>
        <p className="text-slate-200 text-lg  mt-3"> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. </p>
    </div>
    <div className='flex items-center w-1/4 mt-6 ml-16'>
        <button className=" bg-blue-500 rounded-md p-2  text-white text-sm font-bold"> <Link to='/products'> Shop products </Link> </button>
        <a className='cursor-pointer flex text-white text-sm font-bold ml-5'>  Learn More  <span className='w-6 h-6'> <ArrowLongRightIcon /> </span>  </a>
    </div>
  </div>
  </>
  )
}

export default HomePage