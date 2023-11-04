
import './App.css';
import logo from '../src/assets/test_assets/WordOut-Logo.png';
import signin from "../src/assets/test_assets/SignIn.png"

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between px-5 py-3 border-b-[1px] max-sm:flex-col max-sm:gap-3">
        <img src={logo } alt="logo" className='w-20 h-10'/>
        <p className='text-blue-300 font-normal text-base'>
          <a href="json">
            Login
          </a>
          /
          <a href="json">
            Register
          </a>
        </p>
      </nav>
      <div className="flex items-center justify-center w-full h-[80vh] max-sm:flex-col mt-10 ">
        <img src={signin} alt="signin" className='w-[400px] h-[400px] max-sm:w-60 max-sm:h-72' />
        <div className="flex flex-col gap-4 max-sm:justify-center  max-sm:w-full max-sm:px-10">
          <h1 className='text-3xl font-bold text-blue-800'>Sign In</h1>
          <p className='text-lg font-bold '>Your Email</p>
          <input type="text" placeholder='example@gmail.com' className='text-base px-4 py-2 outline-none border-[1px] bg-gray-100 rounded-lg'/>
          <button className='text-white bg-blue-700 text-base px-4 py-2 rounded-lg'>Sign In</button>
          <div className="flex justify-center">
            <p className='w-1/2 border-b-2 border-blue-600'></p>
          </div>
          <button className='text-blue-600 text-base font-semibold'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
